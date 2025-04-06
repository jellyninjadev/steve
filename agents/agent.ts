import type {Message} from '../types'
import { disconnect, queue } from '../history'
import { ask, chat } from '../steve'

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

async function runAgent(role: string, intent: string) {
  const systemMessage: Message = {
    role: "system",
    content: `
      You are an AI agent acting as a ${role}. Your task is to fullfil user intent.
      You can execute shell commands to perform actions.
      - Use "$ <command>" to run a shell command.
      - For commands needing input (e.g., git apply or echo), provide the content in a code block (\`\`\`) after the command.
      Output command only.
      Dont output anything else.
    `
  }

  // local
  const messageHistory: Message[] = [systemMessage, {role: "user", content: intent}]

  const store = async (message: Message) => {
    messageHistory.push(message)
    return queue(message) // global
  }

  await store({role: 'user', content: intent})

  const executedCommands: string[] = []

  while (true) {
    const assistantResponse = await chat(messageHistory)
    await store({role: 'assistant', content: `${assistantResponse}`})

    if (assistantResponse.includes("Task accomplished:")) {
      return assistantResponse.split("Task accomplished:")[1].trim()
    }

    const action = parseCommand(assistantResponse)
    if (action) {
      executedCommands.push(action.command)
      const result = await runShellCommand(action.command, action.content)
      await store({role: 'assistant', content: `${result}`})
    }

    await store({role: 'user', content: "Check the last message and assert if intent was accomplished by returning 'Task accomplished: <answer>' with the final answer or 'Next step: <next_step>' for the next command to run."})
  }
}

const role = Bun.argv[2]
const intent = Bun.argv[3]

if (!role || !intent) {
  console.error("Please provide both a role and an intent as command-line arguments.")
  process.exit(1)
}

try {
  const res = await runAgent(role, intent)
  console.log(res)
} finally {
  await disconnect()
  console.info(`Ran for ${(Bun.nanoseconds() / 1000000000).toFixed(2)}s`)
  process.exit()
}
