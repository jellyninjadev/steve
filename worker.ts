import { store } from './history'

try {
  while (true) {
    await store()
  }
} catch (e) {
  console.log('Error:', e)
}
