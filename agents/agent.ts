import type { Message } from '../types'
import { disconnect, queue } from '../history'
import { ask, chat } from '../steve'

// TODO argparse until \n
const commands = ['/patch', '/fetch', '/swap', '/sentiment']

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

const shell = async (command: string, input = '') => {
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

const agent = async (role: string, intent: string) => {
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
  const messageHistory: Message[] = [systemMessage, { role: "user", content: intent }]

  const store = async (message: Message) => {
    messageHistory.push(message)
    return queue(message) // global
  }

  await store({ role: 'user', content: intent })

  const executedCommands: string[] = []

  while (true) {
    const assistantResponse = await chat(messageHistory)
    await store({ role: 'assistant', content: `${assistantResponse}` })

    if (assistantResponse.includes("Task accomplished:")) {
      return assistantResponse.split("Task accomplished:")[1].trim()
    }

    const action = parseCommand(assistantResponse)
    if (action) {
      executedCommands.push(action.command)
      const result = await shell(action.command, action.content)
      await store({ role: 'assistant', content: `${result}` })
    }

    await store({ role: 'user', content: "Check the last message and assert if intent was accomplished by returning 'Task accomplished: <output>' with the last successfull command output, not explanation of output or 'Next step: <next_step>' for the next command to run." })
  }
}

const expand = async (message: string) => {
  const map = {
    vars: {
      strategies: "Strategy 1: +3%",
      positions: ["DOGE: 1", "BTC: 0", "USDT: 0"].join("\n")
    },
    commands: {
      shell: async (arg) => Bun.$`${arg}`.text(),
      patch: async (diff) => Bun.$`git apply < ${diff}`,
      fetch: async (args) => { }, // TODO Bun.fetch
      swap: async () => { }, // example: swap COIN1 COIN2 amount
      sentiment: async (ticker) => { } // example: /sentiment BTC 
    },
    agents: {
      agent: async (message) => agent("universal agent", message),
      git: async (message) => agent("git manager", message),
      strategy: async (message) => agent("strategy manager", message)
    }
  }

  const variablesRegex = /#\w+/g
  const commandsRegex = /\/\w+(\s+\S+)?/g
  const agentsRegex = /@\w+/g

  const replaceVar = (variable: string) => `${map.vars[variable.slice(1)]}`

  message = message.replace(variablesRegex, replaceVar)

  const commands: { command: string, result: string[] }[] = []
  let match
  while ((match = commandsRegex.exec(message)) !== null) {
    const parts = match[0].split(/\s+/)
    const command = parts[0].slice(1)
    const args = parts.slice(1)
    commands.push({
      command: args.join(' '),
      result: await map.commands[command](args.join(' '))
    })
  }

  if (commands.length) {
    const entries = commands.map(entry => `${entry.command}: ${entry.result}`).join('\n')
    message += `\nCommand Outputs:\n${entries}`
  }

  while ((match = agentsRegex.exec(message)) !== null) {
    const _agent = match[0].slice(1)
    const res = await map.agents[_agent](message)
    message += `\n${_agent}: ${res}`
  }

  return message
}

const role = Bun.argv[2]
const intent = Bun.argv[3]

if (!role || !intent) {
  console.error("Please provide both a role and an intent as command-line arguments.")
  process.exit(1)
}

try {
  const message = await expand(intent)
  const res = await agent(role, message)
  console.log(res)
} finally {
  await disconnect()
  console.info(`Ran for ${(Bun.nanoseconds() / 1000000000).toFixed(2)}s`)
  process.exit()
}
