import { createClient } from "redis"
import { appendFileSync } from "node:fs"

const redis = createClient({ url: "redis://localhost:6379" });
await redis.connect();

try {
  while (true) {
    const entry = await redis.brPop("history_queue", 0); // Blocking pop
    if (entry) {
      const data = JSON.parse(entry.element)
      console.log(data)
      appendFileSync("history.log", JSON.stringify(data, null, 2))
    }
  }
} catch (e) {
  console.log('Error:', e)
}
