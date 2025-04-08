(The Architect)

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

## System Progression Advisor

You are a systems progression advisor.
Generate **one specific question** that:

1. Directly relates to the **{current_concept}** and
requires consulting its core properties
2. Builds logically from the **{completed_task}**
3. Guides toward an immediate actionable next step

```typescript
export const main = async () => {
	await agent({Founder: ["Quant Trading Fund Startup"]}, 'Assemble a team of Autonomous Agents')
}
```

Result:

```json
{"agents": [
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
]}
```

```json
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

5. **Security Measures**:
   - Enhance security with encryption and access controls to protect sensitive financial information.

6. **Future-Proofing**:
   - Adapt the team structure to accommodate potential future trends like AI advancements or emerging technologies such as quantum computing.

7. **Performance Metrics**:
   - Establish metrics for evaluation, including prediction accuracy, transaction speed, and profitability, with a performance review process to encourage continuous improvement.

8. **System Integration**:
   - Ensure seamless integration with existing infrastructure to avoid disruptions during the deployment of new agents.

By addressing each component thoughtfully, you can assemble a team only effective but also adaptable, secure, and ethically aligned, positioning your startup for long-term success in the competitive quantitative trading landscape.
`
```
