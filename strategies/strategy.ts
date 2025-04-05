import {spawn} from 'node:child_process'

let in_trade = false
let direction = 'bullish'

const low_signal = spawn('node', ['./signals/rsi.ts', '14', '20']);
const high_signal = spawn('node', ['./signals/rsi.ts', '14', '80', 'over']);

process.stdin.pipe(high_signal.stdin);
process.stdin.pipe(low_signal.stdin);

high_signal.stdout.on('data', data => {
  if (direction === 'bullish' && in_trade) {
    console.log('/close BTC 100%', data.toString().trim())
      in_trade = false
  } else if (direction !== 'bullish' && !in_trade) {
    console.log('/short BTC 100x 1%', data.toString().trim())
      in_trade = true
  }
})

low_signal.stdout.on('data', data => {
  if (direction === 'bullish' && !in_trade) {
    console.log('/long BTC 100x 1%', data.toString().trim())
      in_trade = true
  } else if (direction !== 'bullish' && in_trade) {
    console.log('/close BTC 100%', data.toString().trim())
      in_trade = false
  }
})
