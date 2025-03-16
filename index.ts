import { readdir } from 'node:fs/promises'
import { ask } from './steve.ts'

const files = await readdir('./save', {withFileTypes: true})

const lines = files
    .filter(file => file.isDirectory())
    .map(d => `export * as ${d.name} from './${d.name}'`)
    .join('\n')

await Bun.write('save/index.ts', lines)
Bun.spawnSync(['./node_modules/.bin/typedoc', '--skipErrorChecking', '--entryPoints', 'save/index.ts', '--json', 'out.json'])
const definitions = await Bun.file('out.json').json()

const response = await ask(`Using the definitions, compile a consice summary and usage. Definitons: ${JSON.stringify(definitions)}`)
console.log(response)

Bun.spawnSync(['bun', './heartbeat.ts'], {stdout: 'inherit'}) // capture the output of the spawned process
