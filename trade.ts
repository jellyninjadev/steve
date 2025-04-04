import { USDMClient, OrderSide, SymbolPrice } from "binance"
import { parseArgs } from 'util'

const api_key = process.env.API_KEY
const api_secret = process.env.API_SECRET

const client = new USDMClient({ api_key, api_secret })

// const _stopPrice = (side: OrderSide, entryPrice: number) => {
//     const riskAmount = capital * risk // $6
//     const pricePerUnit = riskAmount / leveragedCapital // 0.00004

//     if (side === 'SELL')
//         return entryPrice + pricePerUnit * entryPrice

//     return entryPrice - pricePerUnit * entryPrice
// }

// const order = (side: OrderSide, ratio: number, entryPrice: number) => {
//     const stopPrice = _stopPrice(side, entryPrice)

//     const profitSize = (entryPrice - stopPrice) * ratio
//     const profitPrice = entryPrice + profitSize

//     return [profitPrice, stopPrice, profitSize]
// }

// export const short = async (symbol = 'BTCUSDT.P', ratio = 2, entryPrice?: number) => {
//     if (!entryPrice) {
//         const _symbol = await client.getSymbolPriceTicker({symbol})
//         entryPrice = parseFloat(`${(_symbol as SymbolPrice).price}`)
//     }
//     return order('SELL', ratio, entryPrice)
// }

const options = {
  long: {
    type: 'string',
    options: {
      ticker: { type: 'string', required: true },
      leverage: { type: 'number', required: true },
      margin: { type: 'number', required: true }
    },
    call: async (ticker, leverage, margin) => {
      console.log(`/long ${ticker} ${leverage} ${margin}`)

      const balance = await client.getBalanceV3()
      const usdt = balance.filter(ticker => ticker.asset === 'USDT')?.[0].balance ?? 0

      if (usdt == 0) return 'USDT: 0.00000000'

      const leveragedCapital = usdt * leverage
      const quantity = (leveragedCapital / 100) * margin

      const res = await client.submitNewOrder({
        symbol: ticker,
        side: 'BUY',
        type: 'MARKET',
        quantity
      })
    }
  },
  short: {
    type: 'string',
    options: {
      ticker: { type: 'string', required: true },
      leverage: { type: 'number', required: true },
      margin: { type: 'number', required: true }
    },
    call: async (ticker, leverage, margin) => {
      console.log(`/short ${ticker} ${leverage} ${margin}`)

      const balance = await client.getBalanceV3()
      const usdt = balance.filter(ticker => ticker.asset === 'USDT')?.balance ?? 0

      if (usdt == 0) return 'Error: 0 balance'

      const leveragedCapital = usdt * leverage
      const quantity = (leveragedCapital / 100) * margin

      const res = await client.submitNewOrder({
        symbol: ticker,
        side: 'SELL',
        type: 'MARKET',
        quantity
      })
    }
  },
  close: {
    type: 'string',
    options: {
      ticker: { type: 'string', required: true },
      percentage: { type: 'number', required: true }
    },
    call: async (ticker, percentage) => {
      console.log(`/close ${ticker} ${percentage}`)
      const res = await client.cancelOrder({ symbol: ticker })
      return 'Position closed.'
    }
  },
  positions: {
    type: 'boolean',
    call: async () => {
      const positions = await client.getPositionsV3()
      console.log(positions)
      if (!positions.length) return 'No positions opened'
    }
  },
  balance: {
    type: 'boolean',
    call: async () => {
      const balance = await client.getBalanceV3()
      return balance
        .filter(a => ['BTC', 'USDT'].includes(a.asset))
        .map(a => `${a.asset}: ${a.balance}`)
        .join('\n')
    }
  },
  help: {
    type: 'boolean',
    call: () => {
      console.log('HELP')
    }
  },
  chart: {
    type: 'string',
    options: {
      ticker: { type: 'string', required: true },
      timeframe: { type: 'string', required: true }
    },
    call: (ticker, timeframe) => {
      // FIXME Not implemented
      console.log(`Fetch an image from tradingview using browserify ${ticker}?`)
    }
  },
  stoploss: {
    type: 'string',
    options: {
      ticker: { type: 'string', required: true },
      margin: { type: 'number', required: true }
    },
    call: (ticker, margin) => {
      console.log('//TODO Not implemented')
    }
  },
  takeprofit: {
    type: 'string',
    options: {
      ticker: { type: 'string', required: true },
      margin: { type: 'number', required: true }
    },
    call: (ticker, margin) => {
      console.log('//TODO Not implemented')
    }
  },
  stoplimit: {
    type: 'string',
    options: {
      ticker: { type: 'string', required: true },
      margin: { type: 'number', required: true }
    },
    call: (ticker, margin) => {
      console.log('//TODO Not implemented')
    }
  },
  price: {
    type: 'string',
    options: {
      ticker: { type: 'string', required: true }
    },
    call: async (ticker) => {
      let symbol = ticker
      if (ticker === 'BTC') symbol = 'BTCUSDT' // FIXME moving to hyperliquid
      try {
        const priceData = await client.getSymbolPriceTicker({ symbol });
        return `Price for ${ticker}: ${priceData.price}`
      } catch (error) {
        return `Error fetching price for ${ticker}: ${JSON.stringify(error)}`
      }
    }
  }
}

const {values, positionals} = parseArgs({ 
  args: Bun.argv,
  options,
  strict: false
})

const [command, v] = Object.entries(values)[0]
const result = await options[command].call(v, positionals[2], positionals[3])

console.log(result)
