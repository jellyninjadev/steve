import {ask, remember, store} from './steve.ts'
import * as save from './save'
import {action, critique, life, observer, planner } from './agents'

const main = async () => {
    const state = await remember()
    const definitions = await Bun.file('out.json').json()

    let insight = await observer()
    console.log(insight)
    state.timestamp = Date.now()
    state.history.push({ timestamp: state.timestamp, prompt: insight })
    await store(state)

    insight = await life()
    console.log(insight)
    state.timestamp = Date.now()
    state.history.push({ timestamp: state.timestamp, prompt: insight })
    await store(state)

    insight = await planner()
    console.log(insight)
    state.timestamp = Date.now()
    state.history.push({ timestamp: state.timestamp, prompt: insight })
    await store(state)

    insight = await action()
    console.log(insight)
    state.timestamp = Date.now()
    state.history.push({ timestamp: state.timestamp, prompt: insight })
    await store(state)
}

main()