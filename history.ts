import { createClient } from 'redis'
import { appendFileSync } from 'node:fs'
import type { Message } from './types'

const QUEUE = 'history_queue'

const redis = createClient({ url: 'redis://localhost:6379' })
await redis.connect()

export const queue = async (message: Message) => {
  return redis.lPush(QUEUE, JSON.stringify(message))
}

export const store = async () => {
  const entry = await redis.brPop(QUEUE, 0) // Blocking pop
  if (entry) {
    const data = JSON.parse(entry.element)
    console.log(data)
    appendFileSync("history.log", JSON.stringify(data, null, 2))
  }
}

export const disconnect = () => redis.quit()
