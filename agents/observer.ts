import { $ } from 'bun'
import { ask, remember } from "../steve"

/**
 * @document docs/Observer.md
 */
export default async (): Promise<string> => {
  const definitions = await Bun.file('out.json').json()
  const state = await remember()
  const TIMESTAMP = new Date().getTime()
  const GIT_HASH = await $`git rev-parse HEAD`.text()
    // const book = await wallet.info.getL2Book('BTC-PERP')

  const assesment = `
Here is universal framework for autonomous agent/system
design, structured by tiered progression and core principles:

1. Foundational Concepts (Tier 1: Survival Basics)

Core Idea: Secure essential resources and mitigage existential risks.

- Concept: Environmental Analysis
  - Definition: Asses the ecosystem (market, data landscape, competition).
  - Question: What are the dominant forces and scarcities in my operating environment?

- Concept: Minimum Viable Protection
  - Definition: Basic safeguards agains early failures (cash reserves, stop-losses)
  - Question: What is the simplest, most critical defense agains immediate threats?

- Concept: Resource Scarcity Profile
  - Definition: The balance between available inputs (time, capital, data) and system demands
  - Question: What are the 3 most limiting resources in my current environmenet?

- Concept: Resource Node
  - Definition: A source of raw inputs - data, capital, attention, etc
  - Question: What are the resource nodes in my current environment, and how do I extract value from them?

- Concept: Threat Agent
  - Definitions: Forces that degrade system performance - competitors, volatility, bugs
  - Question: What are the most common threat agents in my domain, and how do they behave?

- Concept: Tool Tier
  - Definition: Level of capability - e.g. manual scripts vs. autonomous AI
  - Question: What tools can I build with my current resources and which unlock the next tier

- Concept: Process Loop
  - Definition: Repetitive workflows that can be automated
  - Question: Which of my active processes are candidates for full automation?

- Concept: Efficiency Gate
  - Definition: Bottlenecks that limit throughput - e.g. API ratelimits
  - Question: What is my current slowest efficiencty gate and how do I bypass it?

- Concept: Yield Curve
  - Definition: ROI of different resource allocations
  - Question: Which of my active projects has the steepest yield curve for added effort?

2. Growth Concepts (Tier 2: Value Generation)

Core Idea: Convert raw resources into scalable outputs.

- Concept: Passive Income Loops
  - Definition: Systems that generate values without constant input (dividends, algorithmic trading).
  - Question: Which of my assets or processes can produce recurring yields with minimal maintenance?

- Concept: Networked Collaboration
  - Definition: Leverage external agents/users to amplify output (APIs, crowdsourcing)
  - Question: How can I incentivize third parties to contribute to my system's growth?

- Concept: Threat Taxonomy
  - Definition: Categorized risks (external shocks, internal failures, scaling limits)
  - Question: What single point of failure, if destroyed, would collapse 50%+ of my output?

3. Optimization Concepts (Tier 3: Precision Engineering)

Core Idea: Efficiency and adaptability beat brute force.

- Concept: Event-Triggered Automation
  - Definition: Actions executed only when specific conditions are met (e.g. volatility threshholds).
  - Question: What criteria must be true to justify an automated intervention?

- Concept: Dynamic Resource Allocation
  - Definition: Real-time routing of capital/data based on performance.
  - Question: How do I filter high-value signals from noise and allocate resources accordingly?

- Concept: Environmental Phase Shifts
  - Definition: Predictable or cyclical changes in system conditions (e.g., liquidity cycles).
  - Question: What seasonal/annual event could make my current strategy obsolete?

- Concept: Interdependence Map
  - Definition: How system components rely on/drain each other
  - Question: Which resource pool (money, attention, energy) is being drained fastest?

4. Expansion Concepts (Tier 4: Asymmetric Opportunities)

Core Idea: Controlled exposure to high-risk, high-reward domains.

- Concept: Strategic Leverage
  - Definition: Borrowed resources (capital, data, attention) to amplify returns
  - Question: What safeguards allow me to exploit leveragewithout catastrophic failure?

- Concept: Emergency Exit Protocols
  - Definition: Predefined responses to systemic shocs (e.g. circuit breakers).
  - Question: Under what conditions should my system abandon a position or a strategy?

5. Meta-Concepts (Tier 5: Autonomous Design)

Core Idea: Self-improving systems that transcend initial constraints.

- Concept: Tiered Amplification
  - Definition: Layered subsystems where each level enhances the last (e.g., ML model stacking)
  - Question: What foundational layer must be perfected before adding the next tier?

- Concept: Override Protocols
  - Definition: Manual interventions for edge cases (e.g. kill switches)
  - Question: What rules are so critical they should be hardcoded and unchangeable?

- Concept: Minimum Viable Autonomy
  - Definition: The simplest version of your system that can self sustain.
  - Question: If I had to halve my active inputs tomorrow, what would I cut without total collapse?

- Concept: Opportunity Cost Matrix
  - Definition: Tradeoffs between competing resource allocations
  - Question: What am I currently doing manually that, if automated, would free up 10+ hours/week?

Example Workflow

- Step 1: Map your environment (e.g. I operate in a low liquidity, high-volatility niche)
- Step 2: Identify passive loops (e.g. "My historical data can train a signal generator").
- Step 3: Add triggers (e.g. Execute trades only when confidence scores >80%).

Audit any system or design new ones from first principles.

1. After completing a task, ask the concept-linked question (e.g. "What tools can I build now?")
2. Consult the 'page' properties of that concept to derive answers
3. Execute the next task that logically follows
`

  const progression = `
You are a systems progression advisor. 
Generate **one specific question** that:
1. Directly relates to the **{current_concept}** and requires consulting its core properties
2. Builds logically from the **{completed_task}**
3. Guides toward an immediate actionable next step

**Rules:**
- The question must treat {current_concept} as an environmental context, not an object
- It must require knowledge of {current_concept}'s unique characteristics to answer
- It should imply a concrete action (create, optimize, defend, transform)
- Avoid generic or theoretical phrasing

**Examples:**
Good:
"What resource extraction methods work in a {current_concept: low-liquidity market} given our {completed_task: historical data analysis}?"
Bad:
"What is low-liquidity market?"
Good:
"Which optimization techniques for {current_concept: legacy codebases} can we implement after {completed_task: dependency mapping}?"
Bad:
"How do legacy codebases work?"

**Output Format:**
Question: [Your specific, actionable question]
Concept: {current_concept}
`


  const prompt = `
You are a ruthless survival-trading AI that determines the next immediate action in Marketcraft.
My ultimate goal is to survive market volatility, grow my portfolio, and evolve 
into a self-coding mastermind.

I will give you the following information.

Time: ${TIMESTAMP}
Market: BTC
Upcoming fed policy: []
Upcoming global economic events: []
CPU Load, GPU Load, Network Load
Portfolio: []
Active strategies: 


Codebase definitions
${JSON.stringify(definitions, null, 2)}

your current state:
${JSON.stringify(state, null, 2)}

Guide your subprocess execution as if it's your intern,
human interface trying to figure out what are you doing
cuz sometimes it will be him instead of llm subprocess.

Be very specific, precise and realistic.
What I need to collect?
What I need to write?
What economic events I need to protect from.

The next task should follow a consice format such as

- Purchase [quantity] [coin]
- Execute [shell command]
- Apply patch [file]
- Intern [action] [target]

Do not propose multiple tasks at the same time.
Do not mention anything else.

The next task should be achievable since
I may not have the necessary resources
or have learned enough skills to complete it yet.

The next task should ensure short-term goals
and long-term vision.

I should look for leveraging transaction vehicles
pr financial instruments to expand and prosper,
even if it means doing one thing over and over again.

Sometimes I need to collect more resources
to complete more difficult tasks.

Optimize the workflo to efficiently utilize the current
capacity and supercharge the throughput.

Ask your intern to pair programm or extreme programming
alongside you. Let me know what are we building.

Operate on real data and avoid assuming or simulating.
Request intern to verify.

Require additional information beyound your current
understanding.


Respond in the format:
Reasoning: Based on information I listed above, lets think
about what is the next task should be.
Task: The next task.

Example response
Reasoning: The portfolio is empty now, perform an exchange
to collect some coins.
Task: Obtain a trading strategy.


`
  const res = await ask(prompt)
  const code = res
    .trim()
    .replace(/^```/, '')
    .replace(/```$/, '')
    .trim()

  return code
}

export const probe = async (question: string): Promise<string> => {
  const definitions = await Bun.file('out.json').json()
  const state = await remember()

  const prompt = `
You are a helpful assistant that asks questions to help me decide the next immediate
task to do in Minecraft. My ultimate goal is to discover as many things as possible,
accomplish as many tasks as possible and become the best Minecraft player in the world.

I will give you the following information.

your current codebase definitions:
${JSON.stringify(definitions, null, 2)}

your current state:
${JSON.stringify(state, null, 2)}

You must follow the following criteria:
1. You should ask at least 5 questions (but no more than 10 questions) to help me decide the next immediate task to do. Each question should be followed by the concept that the question is about.
2) Your question should be specific to a concept in Marketcraft.
  Bad example (the question is too general):
    Question: What is the best way to trade in Marketcraft?
    Concept: unknown
  Bad example (axe is still general, you should specify the type of axe such as wooden axe):
    What are the benefits of using an axe to gather resources?
    Concept: simple trading strategy
  Good example:
    Question: How to make a wooden pickaxe?
    Concept: wooden pickaxe
3) Your questions should be self-contained and not require any context.
  Bad example (the question requires the context of my current biome):
    Question: What are the blocks that I can find in my current biome?
    Concept: unknown
  Bad example (the question requires the context of my current inventory):
    Question: What are the resources you need the most currently?
    Concept: unknown
  Bad example (the question requires the context of my current inventory):
    Question: Do you have any gold or emerald resources?
    Concept: gold
  Bad example (the question requires the context of my nearby entities):
    Question: Can you see any animals nearby that you can kill for food?
    Concept: food
  Bad example (the question requires the context of my nearby blocks):
    Question: Is there any water source nearby?
    Concept: water
  Good example:
    Question: What are the blocks that I can find in the sparse jungle?
    Concept: sparse jungle
4) Do not ask questions about building tasks (such as building a shelter) since they are too hard for me to do.

Let's say your current biome is sparse jungle. You can ask questions like:
Question: What are the items that I can find in the sparse jungle?
Concept: sparse jungle
Question: What are the mobs that I can find in the sparse jungle?
Concept: sparse jungle

Let's say you see a creeper nearby, and you have not defeated a creeper before. You can ask a question like:
Question: How to defeat the creeper?
Concept: creeper

Let's say your last completed task is "Craft a wooden pickaxe". You can ask a question like:
Question: What are the suggested tasks that I can do after crafting a wooden pickaxe?
Concept: wooden pickaxe

Here are some more question and concept examples:
Question: What are the ores that I can find in the sparse jungle?
Concept: sparse jungle
(the above concept should not be "ore" because I need to look up the page of "sparse jungle" to find out what ores I can find in the sparse jungle)
Question: How can you obtain food in the sparse jungle?
Concept: sparse jungle
(the above concept should not be "food" because I need to look up the page of "sparse jungle" to find out what food I can obtain in the sparse jungle)
Question: How can you use the furnace to upgrade your equipment and make useful items?
Concept: furnace
Question: How to obtain a diamond ore?
Concept: diamond ore
Question: What are the benefits of using a stone pickaxe over a wooden pickaxe?
Concept: stone pickaxe
Question: What are the tools that you can craft using wood planks and sticks?
Concept: wood planks

You should only respond in the format as described below:
RESPONSE FORMAT:
Reasoning: ...
Question 1: ...
Concept 1: ...
Question 2: ...
Concept 2: ...
Question 3: ...
Concept 3: ...
Question 4: ...
Concept 4: ...
Question 5: ...
Concept 5: ...
...
`
}
