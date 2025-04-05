import { createClient } from 'redis'
import { ask, chat } from '../steve'

const redis = createClient({
  url: 'redis://localhost:6379'
})

const HISTORY_QUEUE = "history_queue"

const push_message = (message: Message) => {
  return redis.lPush(HISTORY_QUEUE, JSON.stringify(message))
}


// Message type for LLM chat history
interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

// FIXME still very bad at parsing
function parseCommand(response: string): { command: string; content?: string } | null {
  const lines = response.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("$")) {
      const command = lines[i].slice(1).trim();
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].startsWith("```")) {
          const contentLines: string[] = [];
          for (let k = j + 1; k < lines.length; k++) {
            if (lines[k].startsWith("```")) break;
            contentLines.push(lines[k]);
          }
          return { command, content: contentLines.join("\n") };
        }
      }
      return { command };
    } else if (lines[i].startsWith("`$")) {
      const command = lines[i].slice(2).trim().slice(0, -1)
      return { command };
    }
  }
  return null;
}

async function runShellCommand(command: string, input = '') {
  console.log(`$ ${command} ${input}`)
  const proc = Bun.spawnSync(["/bin/sh", "-c", command], { stdin: input ? "pipe" : undefined })
  if (input) {
    const stdin = await (proc as any).stdin;
    await stdin?.write(input)
    await stdin.end()
  }
  const output = await new Response(proc.stdout).text()
  const error = await new Response(proc.stderr).text()
  await (proc as any).exited;
  return proc.exitCode === 0 ? output.trim() : `Error: ${error}`
}

const assertObservation = async (observation: string, command: string, intent: string): Promise<string> => {
  return ask(`Does '${observation.trim()}' that I received from running '${command}' is plausible based on what the command is designed to do and answers original question: ${intent}. Respond with (Execution assertion: <assertion>).`, {model: 'llama3', stream: false})
}

async function runAgent(role: string, intent: string) {
  const systemMessage: Message = {
    role: "system",
    content: `
      You are an AI agent acting as a ${role}. Your task is to fullfil user intent.
      You can execute shell commands to perform actions.
      - Use "$ <command>" to run a shell command.
      - For commands needing input (e.g., git apply or echo), provide the content in a code block (\`\`\`) after the command.
      Do not output attempt to output execution result.
      Continue until you can provide "Task accomplished: yes".
      Dont output anything else.
    `
  }

  const messageHistory: Message[] = [systemMessage, {role: "user", content: intent}]
  push_message({role: 'user', content: intent})

  const executedCommands: string[] = []

  while (true) {
    // console.log(messageHistory)
    const assistantResponse = await chat(messageHistory)
    push_message({role: 'assistant', content: assistantResponse})
    messageHistory.push(({role: "assistant", content: assistantResponse}))

    // FIXME Add the final message: Task accomplished

    const action = parseCommand(assistantResponse)
    if (action) {
      executedCommands.push(action.command)
      const observation = await runShellCommand(action.command, action.content)
      messageHistory.push({role: 'system', content: `${observation}`})
      push_message({role: 'system', content: `${observation}`})
      const assertion = await assertObservation(observation, action.command, intent)
      push_message({role: 'assistant', content: `${assertion}`})
    }
  
    push_message({role: 'system', content: "Please provide a '$ <command>' or indicate 'Task accomplished' with the final answer."})
    messageHistory.push({role: "system", content: "Please provide a '$ <command>' or indicate 'Task accomplished' with the final answer."})
  }
}

const role = Bun.argv[2]
const intent = Bun.argv[3]

if (!role || !intent) {
  console.error("Please provide both a role and an intent as command-line arguments.")
  process.exit(1)
}

try {
  await redis.connect();
  const res = await runAgent(role, intent)
  console.log(res)
} finally {
  await redis.quit()
  console.log(`Ran for ${(Bun.nanoseconds() / 1000000000).toFixed(2)}s`)
  process.exit()
}
