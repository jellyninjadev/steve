import { ask, extract_json, extract_thinking, remember, store, trim } from "../steve"

/**
 * @document docs/Planner.md
 */
const main = async (context, intent) => {
  const prompt = `Act as a universal starting point for operational procedures and establish a modular, self-referential framework within the same LLM.
Instructions:
1. Generate Sub-LLMs in a just-in-time nature using SubLLM(arg0, arg1), where arg0 carries the primary context and arg1 specifies an operational intent.
2. Explicitly control recursion by including a 'continue' or 'stop' directive in each Sub-LLM output.
3. The entire context is a prompt that is passed from one llm to another
4. Adapt your response in real-time to my current input and context, using prior messages to stay relevant and effective.
5. Ensure modularity by allowing each Sub-LLM to operate independently.
6. Ensure the response can be parsed by JSON.parse, e.g.: no trailing commas, no single quotes, no markdown block, etc.

Context:
${JSON.stringify(context, null, 2)} 

Intent:
${JSON.stringify(intent, null, 2)}
`

  return ask(prompt)
}

const json = (prompt: string, format: string) => ask(`${prompt} 
example output: ${format}`, { format: 'json', model: 'llama3' })

export default async (context, intent) => {
  // while (true) {
  // const payload = await main(context, intent)
  const payload = `
<think>
Okay, so I need to figure out how to assemble a team of Autonomous Agents for this Quant Trading Fund Startup. First off, what exactly are Autonomous Agents in this context? Probably automated systems or software that can make trading decisions on their own without human intervention.

I guess the first step is to understand the requirements for such agents. Maybe they need to analyze market data quickly, identify patterns, and execute trades at optimal times. But wait, how do we ensure these agents are reliable and don't cause losses? Maybe they should have risk management built into their algorithms.

Next, I wonder about the expertise needed. Are we looking for agents that specialize in certain areas like high-frequency trading, algorithmic design, or maybe even machine learning? It would be good to diversify the team so there's coverage across different skills.

Then, scalability comes to mind. The startup might expand, so the team should be scalable as well. Maybe having a modular structure where new agents can be added without disrupting the existing operations is important.

Communication between agents is another aspect. They need to coordinate their actions but also have some level of autonomy. Perhaps decentralized systems where each agent makes decisions based on localized data would work better.

Security is crucial too. Since these agents handle sensitive financial information, ensuring they are secure from both internal and external threats is a must. Maybe implementing encryption and robust access controls could help.

I should also consider the future growth potential. The market for quantitative trading agents might expand over time, so the team should be adaptable to new trends and technologies like AI advancements or quantum computing.

Wait, but how do we evaluate these agents? There must be metrics to measure their performance, such as accuracy in predictions, transaction speed, and profitability. Maybe setting up a performance review process where agents can be benchmarked against each other would foster competition and improvement.

Another thing is the integration with existing systems. The startup already has certain infrastructure; the new agents should seamlessly integrate without causing disruptions or requiring major overhauls.

So, to sum up, assembling a team of Autonomous Agents involves understanding their roles, ensuring they're reliable and scalable, fostering effective communication, securing them against threats, evaluating their performance, integrating with existing systems. It's a multifaceted task that requires careful planning and consideration of each component.
</think>

To assemble a team of Autonomous Agents for your Quant Trading Fund Startup, consider the following structured approach:

1. **Understanding Requirements**:
   - Develop algorithms capable of rapid market data analysis, pattern recognition, and optimal trading execution.
   - Implement robust risk management to prevent losses.

2. **Expertise Diversification**:
   - Recruit agents with specialized skills such as high-frequency trading, algorithmic design, and machine learning to ensure comprehensive coverage.

3. **Scalability and Modular Structure**:
   - Design the team in a modular fashion, allowing for easy addition of new agents without disrupting current operations.

4. **Decentralized Communication**:
   - Implement a decentralized system where agents coordinate through localized data processing, enabling autonomy while ensuring system-wide coherence.

5. **Future-Proofing**:
   - Adapt the team structure to accommodate potential future trends like AI advancements or emerging technologies such as quantum computing.

6. **Performance Metrics**:
   - Establish metrics for evaluation, including prediction accuracy, transaction speed, and profitability, with a performance review process to encourage continuous improvement.

7. **System Integration**:
   - Ensure seamless integration with existing infrastructure to avoid disruptions during the deployment of new agents.

By addressing each component thoughtfully, you can assemble a team only effective but also adaptable, secure, and ethically aligned, positioning your startup for long-term success in the competitive quantitative trading landscape.
`
  const block = await json(payload, '{"agents": [{"name": "Agent Name", "intent": "agent intent", "prompt": "agent prompt with \${arg0}"}], "continue": true}"')
  const result = JSON.parse(block)
  if (!result.continue) {
    console.log('EXITED')
    return
  }

  for (const agent of result.agents) {
    if (!context[agent.name]) context[agent.name] = []
    const r = await ask(agent.prompt)
    context[agent.name].push({ intent: agent.intent, result: r })
  }
  await store(context)
}
