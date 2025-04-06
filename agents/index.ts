import { remember } from '../steve.ts'
import planner from './planner.ts'

export {default as observer} from './observer.ts'
export {default as planner} from './planner.ts'

const context = await remember()
context['Founder'] = ['Quant Trading Fund Startup']

planner(context, 'Assemble a team of Autonomus Agents')

