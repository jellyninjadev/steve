import {ask, remember, store} from './steve.ts'
import * as save from './save'

const main = async () => {
    const state = await remember()
    const definitions = await Bun.file('out.json').json()

    const insight = await ask(`${JSON.stringify(state)} ${JSON.stringify(definitions)} Summarize`)
    console.log(insight)

    state.timestamp = Date.now()
    await store(state)
}

main()