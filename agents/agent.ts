// Run with: bun agent.ts "version control manager" "Patch a file in order to update its settings"

// Import Redis client (install with: bun add redis)
import { createClient } from "redis";
import { ask, chat } from "../steve";

// Redis client setup
// const redis = createClient({
//   url: "redis://localhost:6379", // Adjust URL as needed
// });
// await redis.connect();
// const HISTORY_QUEUE = "history_queue";

// Message type for LLM chat history
interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

// Interface for history entry
interface HistoryEntry {
  role: string;
  intent: string;
  commands: string[];
  outcome: string;
}

// Placeholder for LLM call (to be implemented elsewhere)
// async function ask(context: Message[]): Promise<string> {
  // This is a stub; replace with your actual LLM implementation
  // throw new Error("LLM 'ask' function not implemented");
// }

// Parse LLM response for shell commands
function parseCommand(response: string): { command: string; content?: string } | null {
  const lines = response.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("$")) {
      const command = lines[i].slice(1).trim();
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].startsWith("```")) {
          const contentLines = [];
          for (let k = j + 1; k < lines.length; k++) {
            if (lines[k].startsWith("```")) break;
            contentLines.push(lines[k]);
          }
          return { command, content: contentLines.join("\n") };
        }
      }
      return { command };
    }
  }
  return null;
}

// Execute shell command
async function runShellCommand(command: string, input?: string): Promise<string> {
  console.log(`Attempt to execute: ${command}: ${input}`)
  return Bun.$`${command} < ${input} 2>&1`
}

const assertObservation = async (observation: string, command: string): Promise<string> => {
  const proc = Bun.spawn(["bun", "./agents/agent.ts", "assertion checker", `Assert whether the observation "${observation}" from command "${command}" indicates success (return "Task accomplished: yes") or failure (return "Task accomplished: <result>)"`])
  const output = await new Response(proc.stdout).text()
  await proc.exited
  return output.trim()
}

// Queue history entry to Redis
async function queueHistory(role: string, intent: string, commands: string[], outcome: string) {
  // const entry: HistoryEntry = { role, intent, commands, outcome };
  // await redis.lPush(HISTORY_QUEUE, JSON.stringify(entry));
  return Promise.resolve()
}

// Main agent function
async function runAgent(role: string, intent: string) {
  // System instructions for a minimal agent
  const systemMessage: Message = {
    role: "system",
    content: `
      You are an AI agent acting as a \${role}. Your task is to \${intent}.
      You can execute shell commands to perform actions.
      - Use "$ <command>" to run a shell command.
      - For commands needing input (e.g., git apply or echo), provide the content in a code block (\`\`\`) after the command.
      After a command, you'll receive an observation. Continue until you can provide "Task accomplished" with the final answer.
    `
  }

  // Initialize message history
  const messageHistory: Message[] = [systemMessage, {role: "user", content: intent}]

  const executedCommands: string[] = []

  // while (true) {
    console.log('Calling steve')
    // Call LLM with current context
    const assistantResponse = await chat(messageHistory)
    messageHistory.push(({role: "assistant", content: assistantResponse}))

    if (assistantResponse.includes("Task accomplished")) {
      const finalAnswer = assistantResponse.split("Task accomplished")[1].trim()
      console.log(finalAnswer)
      await queueHistory(role, intent, executedCommands, finalAnswer)
      if (finalAnswer === 'yes') {
        return 0
      }
    }

    const action = parseCommand(assistantResponse)
    if (action) {
      executedCommands.push(action.command)
      const observation = await runShellCommand(action.command, action.content)
      const assertion = await assertObservation(observation, action.command)
      messageHistory.push({role: "user", content: `Observation: ${observation}`})
      messageHistory.push({role: "user", content: `Assertion: ${assertion}` })
    } else {
      messageHistory.push({role: "user", content: "Please provide a '$ <command>' or indicate 'Task accomplished' with the final answer."})
    }
  // }
}

const role = Bun.argv[2]
const intent = Bun.argv[3]

if (!role || !intent) {
  console.error("Please provide both a role and an intent as command-line arguments.")
  process.exit(1)
}

try {
  await runAgent(role, intent)
} finally {
  // await redis.quit()
}
