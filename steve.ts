
const log = async () => {
    const state = {
        coins: 0,
        intern: 'active',
        timestamp: Date.now()
    }
    console.log(state)
    await Bun.write('state.json', JSON.stringify(state))
}