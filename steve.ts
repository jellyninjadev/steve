
export const ask = async (prompt: string) => {
    console.time('Steve is asking LLM')
    const payload = await fetch('http://100.101.237.13:11434/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            model: 'llama3',
            prompt,
            stream: true
        })
    })
    let fullResponse = ''

    const decoder = new TextDecoder()
    const reader = payload.body!.getReader()

    while (true) {
        const { done, value } = await reader!.read()
        if (done) break
        
        try {
            const chunk = decoder.decode(value)
            const jsonChunk = JSON.parse(chunk)
            fullResponse += jsonChunk.response
        } catch (e) {
            console.log('exited abruptly')
        }
    }

    console.timeEnd('Steve is asking LLM')
    return fullResponse
}

export const remember = async () => {
    console.time('Steve is remembering')
    const blob = Bun.file('state.json', { type: 'application/json' })
    let state = {
        coins: 0,
        intern: 'active',
        timestamp: Date.now()
    }
    try {
        state = JSON.parse(await blob.text())
    } catch (e) {
        console.log('Steve has no memory') 
    }

    console.timeEnd('Steve is remembering')
    return state
}

export const store = async (state) => {
    console.time('Steve is storing')
    await Bun.write('state.json', JSON.stringify(state))
    console.timeEnd('Steve is storing')
}