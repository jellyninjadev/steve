import { KlineInterval, WebsocketClient } from 'binance'

const ticker = process.argv[2]
const interval: KlineInterval = process.argv[3]

if (!ticker) {
  process.exit(1);
}

const client = new WebsocketClient({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
}, {
    info: () => {},
    silly: () => {},
    error: console.log
  })

client.on('message', (data) => {
  process.stdout.write(JSON.stringify(data) + '\n')
});

client.subscribeKlines(ticker, interval, 'usdm')
      

