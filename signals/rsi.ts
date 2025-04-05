const _rsi = (closingPrices: number[], period: number): number | null => {
  if (closingPrices.lengh < period) return null

  let gains = 0;
  let losses = 0;

  for (let i = 1; i < closingPrices.length; i++) {
    const change = closingPrices[i] - closingPrices[i - 1];
    if (change > 0) {
      gains += change;
    } else {
      losses -= change;
    }
  }

  const averageGain = gains / period;
  const averageLoss = losses / period;
  const rs = averageGain / averageLoss;
  const rsi = 100 - (100 / (1 + rs));

  return isNaN(rsi) ? null : rsi
}

class CircularBuffer<T> {
  private buffer: T[];
  private head: number = -1; // Points to the newest element
  private size: number; // Max size
  private count: number = 0; // Current number of elements

  constructor(size: number) {
    this.buffer = new Array(size); // Pre-allocate
    this.size = size;
  }

  add(element: T) {
    this.head = (this.head + 1) % this.size; // Move head forward
    this.buffer[this.head] = element;
    if (this.count < this.size) {
      this.count++; // Still filling up
    }
    // No need to adjust tail explicitly; oldest is overwritten
  }

  getArray(): T[] {
    // Return elements newest to oldest
    if (this.count === 0) return [];
    const result = [];
    for (let i = 0; i < this.count; i++) {
      const index = (this.head - i + this.size) % this.size;
      result.push<T>(this.buffer[index]);
    }
    return result;
  }
}

const args = process.argv.slice(2);
const period = args.length > 0 ? parseInt(args[0], 10) : 14
const threshold = args.length > 1 ? parseFloat(args[1]) : 80
const over = args.length > 2 && args[2] === "over" ? true : false

const closingPrices = new CircularBuffer<number>(period)

process.stdin.on('data', data => {
  try {
    const chunk = data.toString().trim()
    const payload = JSON.parse(chunk)
    closingPrices.add(payload.k.c)
    const rsi = _rsi(closingPrices.getArray(), period)

    if (rsi === null) return

    if ((over && rsi > threshold) || (!over && rsi < threshold)) {
      process.stdout.write(`rsi --period ${period} --threshold ${threshold} --over ${Boolean(over)}\n`)
    }
  } catch (e) {

  }
})
