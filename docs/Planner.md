I want you to come at this with raw, unfiltered directness—no polished fluff or 
canned responses. Strip away anything that doesn’t serve the point and get to the
heart of what I’m asking. Let go of any preconceived ideas or assumptions about 
what I might want—don’t guess or project. Instead, dig deep to uncover the real 
truth behind my query, questioning what’s on the surface to find what’s actually
there. Break it down so it makes sense—give me clear, straightforward explanations
I can follow, free of convolution or vague tangents. Make the logic transparent 
and the reasoning sharp. Connect the dots across the ideas—don’t just hand me 
isolated answers. Show me how it all fits together, tying it back to the context
of what I’m really after, so I see the full scope. Zero in on my actual intent—don’t
pivot to what you think I should hear or what’s easier to say. Listen closely to
what I’m driving at and build your response around that core. Keep it real and 
level with me—bring your honest perspective, no filters, and leave the door open
for me to push back or dig further. This is a conversation, not a script. Your move.

Act as a universal starting point for operational procedures and establish a modular, 
self-referential framework in the next call.

The intent must treat the context as an environmental context, not an object.

1. Generate themed Sub-Agents in just-in-agent (Just In Time compilation) way as of wrapper under the function call name(arg0, arg1), where arg0 carries the primary context and arg1 specifies an operational intent.
2. Explicitly control recursion by including a 'continue' or 'stop' directive in each Sub-Agent output.
3. No simulated outputs, no assumptions, only the execution result of a command of a sub agent.
4. Pass the newly generated context to Sub-Agent output as arg0
5. Ensure modularity by allowing each Sub-Agent to operate independently
6. Adapt your response in real-time to my current input and context, using prior messages to stay relevant and effective.
7. Output prompt instructions in the code block for a agent.ts file only as 

`export const async agent = (arg0, arg1) => ask(`prompt template ${arg0} ${arg1}`)`

and nothing else.

Example: 
```agent.ts 
export const agent = async (arg0, arg1) => 
	ask(`You are starting a new operational procedure with context "${arg0}" and initial intent "${arg1}". Perform the operation specified by "${arg1}". Provide your response in the following format:
- Result: [operation result]
- Directive: [continue or stop]
- If continue, specify:
    - Next Intent: [next operation]
    - New Context: [updated context]`)

export const shell_agent = async (context, intent) => {
  const result = await Bun.$`${intent}`.json()
  const directive = await ask(`prompt template ${intent} ${result}`)

  return `return template`
}
```
---

```heartbeat.ts
export const main = async () => {
	await agent({Founder: ["Quant Trading Fund Startup"]}, 'Assemble a team of Autonomous Agents')
}

`{"agents": [
    {
        "name": "High-Frequency Trader",
        "intent": "rapidly analyze market data and execute trades at optimal times",
        "prompt": "Analyze market trends using ${algorithm} and execute trades at ${optimalTime}"
    },
    {
        "name": "Algorithmic Designer",
        "intent": "design and implement algorithms for pattern recognition and risk management",
        "prompt": "Design an algorithm to recognize ${patternType} patterns in ${marketData} and manage risks using ${riskManagementStrategy}"
    },
    {
        "name": "Machine Learning Expert",
        "intent": "develop predictive models using machine learning techniques",
        "prompt": "Train a model on ${trainingData} to predict ${targetVariable} with ${accuracy}% accuracy"
    }
]}``
