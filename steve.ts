export const extract_thinking = (response: string) => {
  const thinking = response.match(/<think>([\s\S]*?)<\/think>\s*/s)
  return thinking ? thinking[1] : null
}

export const trim = (response: string) => {
  response = response.replace(/<think>.*?<\/think>\s*/s, '')
  response = response.replace(/```json\s*[\s\S]*?\s*```/s, '')
  return response.trim()
}

export const extract_json = (response: string) => {
  const payload = response.match(/```json\s*([\s\S]*?)\s*```/s)
  if (!payload) return null
  try {
    return JSON.parse(payload[1])
  } catch (e) {
    return null
  }
}

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export const chat = async(messages: Message[], options: any = null) => {
    const payload = await fetch('http://100.101.237.13:11434/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            model: 'llama3',
            messages,
            stream: false,
            ...options
        })
    })
    let fullResponse = ''

    const decoder = new TextDecoder()
    const reader = payload.body!.getReader()

    while (true) {
        const { done, value } = await reader?.read()
        if (!reader) continue
        if (done) break
        
        const chunk = decoder.decode(value, {stream: true})
        try {
            const jsonChunk = JSON.parse(chunk)
            // process.stdout.write(jsonChunk.message.content)
            fullResponse += jsonChunk.message.content
        } catch (e) {
            console.log('\nexited abruptly: ', chunk)
        }
    }

    // console.timeEnd('Steve is asking LLM')
    return fullResponse
}

export const ask = async (prompt: string, options: any = {}) => {
    // console.time('Steve is asking LLM')
    const body = {
      model: 'deepSeek-R1',
      prompt,
      stream: true,
      ...options
    }
    const payload = await fetch('http://100.101.237.13:11434/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    let fullResponse = ''

    const decoder = new TextDecoder()
    const reader = payload.body!.getReader()

    while (true) {
        const { done, value } = await reader?.read()
        if (!reader) continue
        if (done) break
        
        const chunk = decoder.decode(value, {stream: true})
        try {
            const jsonChunk = JSON.parse(chunk)
            if (body.stream) {
              process.stdout.write(jsonChunk.response)
            }
            fullResponse += jsonChunk.response
        } catch (e) {
            // console.log('\nexited abruptly: ', chunk)
        }
    }

    // console.timeEnd('Steve is asking LLM')
    return fullResponse
}

type Execution = {
    agent: 'Observer' | 'Planner' | 'Executioner'
    timestamp: number, 
    completed: false,
    task: string,
    subtasks: Execution[]
}

type State = {
    BTC: number,
    intern: 'active' | 'inactive',
    history: Execution[]
}

export const remember = async () => {
    console.time('Steve is remembering')
    const blob = Bun.file('state.json', { type: 'application/json' })
    let state = {}
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
