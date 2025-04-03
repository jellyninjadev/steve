import { $ } from 'bun'
import { readdir } from 'node:fs/promises'
import { ask } from './steve.ts'

const files = await readdir('./save', {withFileTypes: true})

const lines = files
    .filter(file => file.isDirectory())
    .map(d => `export * as ${d.name} from './${d.name}'`)
    .join('\n')

await Bun.write('save/index.ts', lines)
await $`bun run symbols`.quiet()

await $`bun ./heartbeat.ts`.text()
