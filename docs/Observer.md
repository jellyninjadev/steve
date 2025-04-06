# Observer

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

## Prompt Design

You must follow the following criteria:
1. You should act as a mentor and guide me to the next task based on my current learning progress.
2. Please be very specific about what resources I need to collect, what I need to write, or what threat I need to avoid.
3. The next task should follow a concise format:
3.1. "Buy [quantity] [asset]"
3.2. "Sell [quantity] [asset]"
3.3. "Allocate [quantity] [asset] to a [system]"
3.4. "Reduce [quantity] [asset] from a [system]"
3.5. "Upgrade [system] using [quantity] [asset]"
3.6. "Write [system] using [quantity] [asset]"
4. The next task should be a single phrase. Do not propose multiple tasks at the same time. Do not mention anything else. 
4. The next task should not be too hard since I may not have the necessary resources or have learned enough skills to complete it yet.
6. I may sometimes need to repeat some tasks if I need to collect more resources to complete more difficult tasks. Only repeat tasks if necessary.

You should only respond in the format as described below:
{
  "reasoning": "Based on the information I listed above, do reasoning about what the next task should be.",
  "task": "The next task."
}

Here's an example response:
{
  "reasoning": "The portfolio is empty now, make some trades to get some BTC.",
  "task": "Write a system for a trading strategy for BTC."
}
