import {ask, remember, store} from './steve.ts'
import * as save from './save'
import {action, observer, planner } from './agents'

const main = async () => {
  // let state = await remember()
  const context = {}

  while (true) {
    const result = await planner(context, 'Quant Trading Fund Startup')
  }
}

main()
