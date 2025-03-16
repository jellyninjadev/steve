import { readdir } from 'node:fs/promises'

const files = await readdir('./save', {withFileTypes: true})

const lines = files
    .filter(file => file.isDirectory())
    .map(d => `export * as ${d.name} from './${d.name}'`)
    .join('\n')

await Bun.write('save/index.ts', lines)
Bun.spawnSync(['./node_modules/.bin/typedoc', '--skipErrorChecking', '--entryPoints', 'save/index.ts', '--json', 'out.json'])
// const definitions = await Bun.file('out.json').json()

// console.log(JSON.stringify(definitions, null, 2))