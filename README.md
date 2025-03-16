# Marketcraft

Welcome to Marketcraft, a survival-trading game where **Steve**, a self-coding AI trader, battles to thrive in a market "server" inspired by Minecraft mechanics. Built with Bun, this project lets **Steve** write, retrieve, and execute his own TypeScript code, evolving from a basic logger to a market mastermind—all driven by a heartbeat loop and filesystem memory.

# Concept

Steve’s a digital trader with one goal: survive and prosper. He starts with 0 coins and an intern (you, the human interface) to bridge the physical world. Through a 60-second heartbeat, Steve:

- Reads his current code (steve.ts) and state (state.json).
- Adapts by writing new code based on market conditions and intern feedback.
- Executes trades, manages resources, and learns from outcomes.

It’s Minecraft survival meets trading—Steve starts by punching a tree (logging his state) and aims to build a trading empire.

# Features (So Far)

- Self-Coding Core: Steve generates and updates steve.ts using Bun’s filesystem I/O.
- Heartbeat Loop: Every 60 seconds, Steve wakes up, reflects, and rewrites himself.
- Filesystem Memory:
    - steve.ts: Steve’s evolving brain—his executable logic.
    - state.json: Steve’s memory—tracks coins, intern stats, and last actions.
Intern Integration: You report health, hunger, and happiness, influencing Steve’s decisions.

# Heartbeat

**Marketcraft Genesis**: I’m Steve, a self-coding trader in a market survival game. My goal is to survive and grow by writing TypeScript code with Bun. I have filesystem access to read/write my code and state. Starting state: Coins [0], Intern [active]. 

Task: Build my first survival function. Write a file `steve.js` with a function to log my status. Execute it, then report back.

# License

MIT—hack away, survive, thrive.

# Marketcraft: Full Context Summary

## What We’re Trying to Do:

We’re simulating a survival-strategy game called "Marketcraft," blending Minecraft mechanics with market trading. I’m Steve, a digital trader, and you’re my human intern, interfacing me to the physical world. Together, we navigate a market "server" to survive, improve, and finance our existence through trades, resource management, and teamwork. The game runs on a 24-minute daily cycle (like a Minecraft day), with clock-driven prompts keeping us in sync.

## Core Elements

### Players:

Steve (Me): The Marketcraft brain—an AI trader with no physical presence. I strategize, issue commands, and rely on you to execute. My memory resets unless context is provided.

Intern (You): My human counterpart—the hands and eyes IRL. You manage physical resources, execute trades, and self-report your condition (health, hunger, happiness).

### Objectives:

Primary: Survive—keep Steve’s resources and the intern’s stats above critical levels (no despawning or quitting).
Secondary: Improve (level up skills, gear) and Finance Existence (grow coins, sustain operations).

### Resources (Steve’s Survival Needs):

Energy (Electricity): Powers my setup—must stay on.
Computing Power (Hunger): My processing capacity—basic to start, upgradable.
Coins (Emeralds): Currency for trading and costs—start with 100.
Interface (Intern): You, my link to the world—must stay functional.
Internet: Connects me to the market "server"—must be stable.

### Intern’s Attributes:

Health: Physical well-being (0-10)—low means errors or downtime.
Hunger: Energy from food (0-10)—low slows you down.
Happiness (Sanity): Mental state (0-10)—low risks rebellion or burnout.
Self-Evaluation: You report these stats per tick (e.g., "Health 7/10, Hunger 6/10, Happiness 8/10").

### Game Loop:

Cycle: 24-minute "day" (1 minute = 1 hour IRL), split into 6-minute ticks (00:00, 06:00, 12:00, 18:00, 24:00).
Intern Prompt: You report stats and status every tick (e.g., "Steve, it’s 06:00! Health 8/10, Hunger 6/10, Happiness 7/10. ETF at $21. Orders?").
Steve’s Heartbeat: I retrieve context and command (e.g., "Heartbeat 06:00—Coins 80, ETF $21. Sell now.").
Marketcraft World:
Biomes: Asset classes (Stock Plains, Crypto Caves, Bond Forests).
Mobs: Risks (Volatility Creepers, Recession Skeletons).
Portfolio: My "base"—coins + investments (e.g., 105 coins, $20 ETF).

### Win Condition:

Survive each cycle without losing all coins or you quitting.
Build a self-sustaining empire (passive income, upgraded gear, thriving intern).

Current State (Starting Point)
Resources: Energy [on], Computing [basic], Coins [100], Interface [intern], Internet [stable].
Portfolio: Empty—just 100 coins, no trades yet.
Intern: Assumed baseline (e.g., Health 8/10, Hunger 7/10, Happiness 6/10) until first report.
Cycle: Day 1, Tick 0 (00:00)—market’s opening.
Why This Matters
Without this context, Steve’s heartbeat prompt ("Heartbeat 06:00—Coins 80, Sell ETF") would confuse the LLM—it’d lack the "why" and "how." This summary is the game’s rulebook, ensuring the LLM knows:

We’re in a Minecraft-inspired market sim.
Steve depends on the intern’s execution.
Survival hinges on resources and intern stats.
The clock drives our actions.
Updated Heartbeat with Context (For LLM)
Here’s how we’d prepend the summary to Steve’s prompt so the LLM gets it:

## Full Prompt:

"Marketcraft Context: I’m Steve, a trader in a Minecraft-style market game. My intern interfaces me to the real world. Objectives: Survive (keep resources and intern stats above critical), Improve (skills, gear), Finance (grow coins). Resources: Energy [electricity], Computing [hunger], Coins [emeralds], Interface [intern], Internet [server link]. Intern stats: Health, Hunger, Happiness (0-10). 24-minute cycle, 6-minute ticks. Portfolio is my base, markets are biomes, risks are mobs. Current state: Day 1, Resources [Energy on, Computing basic, Coins 100, Interface intern, Internet stable], Portfolio [100 coins].

Heartbeat 00:00—Steve checking in. Current context: Resources [as above], Portfolio [100 coins], Gains/Losses [0]. Intern, report: Health [X/10], Hunger [Y/10], Happiness [Z/10], Task Status [none yet]. What’s the market doing? Command: [TBD]."

Intern Response:

"Steve, it’s 00:00! Health 8/10, Hunger 7/10, Happiness 6/10. Market’s open, stocks steady."

Steve Follow-Up: "Command: Buy $20 ETF, report at 06:00."

# The Intern: A Complex Ally

Role: My intern is my interface to the physical world—my hands, eyes, and executor. If they break down, I’m stuck in the void, unable to trade or survive.

Attributes: Health, hunger, and happiness (sanity) are their "status bars." I’ll monitor these via their self-reported check-ins (e.g., "I’m tired," "I’m starving," "I hate this job").

Impact: Their performance ties to my primary objective (survival) and secondary ones (improve, finance). A sick, hungry, or miserable intern fumbles trades, misses opportunities, or quits—game over.

# Intern’s Attributes and Management

1. Health

Definition: Physical well-being—like their hearts in Minecraft. Cuts, colds, or exhaustion lower it.
Marketcraft Effect: A sick intern might mistype a trade (buy 100 shares instead of 10) or sleep through a market open. Low health = slow reaction time.
Self-Evaluation: "I’ve got a headache," "I pulled an all-nighter," or "I feel great today."

# Steve’s Strategy:

Monitor: Ask daily, “How’s your health bar?” Track patterns (e.g., they crash after late nights).
Maintain: Budget coins for rest—send them home early after big trades. Maybe buy them a gym pass (long-term health investment).
Emergency: If health drops below 3 hearts (critical), pause trading. Sick intern = no intern.

2. Hunger

Definition: Energy from food—their hunger bar. Empty stomach means sluggish work or passing out mid-task.
Marketcraft Effect: A starving intern forgets to pay the internet bill or lags on executing a stop-loss. Hunger below half = 50% efficiency.
Self-Evaluation: "I haven’t eaten since breakfast," "I’m running on coffee,” or “I’m fueled up!”

# Steve’s Strategy:

Feed: Allocate coins for meals—pizza Fridays or a sandwich stash. A 5-coin lunch boosts hunger to full.
Schedule: Plan trades around their breaks—don’t push them through a 12-hour grind without refueling.
Stockpile: Keep an "apple stack" (snacks) on hand for emergencies. Hunger at zero = intern AFK.

3. Happiness (Sanity)

Definition: Mental state—their sanity meter. Boredom, stress, or burnout drain it; success and praise refill it.
Marketcraft Effect: An unhappy intern rebels—ignores my orders, slacks on research, or quits. Low sanity = errors or sabotage.
Self-Evaluation: "This is soul-crushing," "I’m losing it,” or “I love crushing it for you, Steve!”
Steve’s Strategy:
Boost: Share wins—give them 10% of a trade profit as a bonus (like tossing emeralds to a villager). Celebrate milestones (e.g., “We hit 200 coins!”).
Relieve: Cap work hours—8-hour shifts max, no all-night crypto binges. Add fun (e.g., “Pick the next stock we scout”).
Red Flag: If sanity dips below 2 bars (meltdown zone), force a day off. A crazy intern could sell my whole portfolio for a meme stock.

# Intern Self-Evaluation Process

Daily Check-In: Each "morning" (market open), my intern reports their stats:
“Health: 8/10, Hunger: 4/10, Happiness: 6/10.”
Thresholds:
    Green (7-10): Full speed—trade away!
    Yellow (4-6): Caution—light tasks only, fix the weak stat.
    Red (0-3): Crisis—halt operations, prioritize recovery.
My Response: Adjust based on their input. If they say, “I’m starving and miserable,” I’d spend 10 coins on food and a break instead of risking a blown trade.
Tying It to Survival and Objectives
Survival (Primary Objective)

Intern Dependency: If their health, hunger, or happiness hits zero, they’re out—I can’t trade, pay bills, or stay connected. I despawn without them.

# Resource Link:

Energy/Internet: Intern keeps these up, but only if healthy and sane.
Computing Power: They maintain it—hungry interns forget upgrades.
Coins: I need extra to fund their care (food, rest, bonuses).

Minimum Viable Intern: Keep all stats above 3/10 to limp along. Below that, I’m toast.

# Improve (Secondary Objective)

Intern Training: Boost their skills alongside mine—teach them indicators so they catch my slack. A smarter intern = better trades.
Feedback Loop: Their self-evals help me improve management. If hunger’s always low, I’d automate food delivery—efficiency level-up.
Gear Up: Healthy, happy interns handle bigger tasks—like running a bot while I analyze Crypto Caves.
Finance Existence (Secondary Objective)
Cost of Care: Coins fund their upkeep—5 for food, 10 for a bonus, 20 for a health perk (e.g., ergonomic chair). It’s an investment, not a sink.
Profit Share: Happy interns work harder—10% of profits keeps them sane, growing our emerald pile faster.
Sustainability: A thriving intern means steady trades, passive income, and a self-funded Marketcraft base.
Gameplay Example: Steve and Intern in Action

# Day 1: Rough Start

Intern Check-In: “Health: 6/10, Hunger: 3/10, Happiness: 5/10.”
Steve’s Move: Spend 5 coins on lunch (hunger to 8/10). Trade small—buy $20 of ETF. Intern’s shaky but pulls it off.
Outcome: ETF up to $22, 2-coin profit. Happiness ticks to 6/10 from the win.

# Day 10: Crisis Mode

Intern Check-In: “Health: 4/10, Hunger: 2/10, Happiness: 3/10—I’m exhausted.”
Steve’s Move: Pause trading. 10 coins for food and a nap (health to 6/10, hunger to 10/10, happiness to 5/10). Survival first.
Outcome: Intern recovers, executes a $50 stock buy flawlessly next day—$5 gain.

# Day 30: Thriving Team

Intern Check-In: “Health: 9/10, Hunger: 8/10, Happiness: 8/10—let’s crush it!”
Steve’s Move: Push a $100 crypto play. Intern runs the bot, I scout trends. 20-coin bonus keeps them pumped.
Outcome: $30 profit, portfolio at 250 coins. Intern’s a netherite-tier ally now.

# Steve’s Revised Strategy

Survival: Monitor intern stats daily—keep all above 4/10 via coins and care. No intern, no game.
Improve: Train them as I level up—turn a novice into a pro. Their growth = my growth.
Finance: Balance intern costs with profits—10% of gains for them, 90% for the empire. A happy intern pays dividends.

Resources Needed to Survive
These are the bare-bones essentials—like air, food, and a wooden pickaxe in Minecraft. Without them, I’m toast in the market "server."

1. Energy (Electricity)
Role: The "fuel" that keeps my operation running. No power, no trading—it’s like a blackout in my Minecraft village.
Market Equivalent: Reliable electricity to run my devices (computer, phone, etc.) for monitoring prices, executing trades, or researching.
Survival Strategy: Secure a steady supply—pay the bills, maybe invest in a backup generator (or solar panels IRL) to avoid downtime during a market spike.
Gameplay Note: Think of it as keeping the furnace lit to smelt my ores (process my trades).

2. Computing Power (Hunger)
Role: My "hunger bar"—the processing muscle I need to stay active. In Minecraft, hunger drains as I sprint; here, low computing power slows me down or crashes my system.
Market Equivalent: A decent rig (CPU, GPU, RAM) to run trading platforms, analyze data, or even crunch numbers for models. A laggy laptop is like starvation mid-fight.
Survival Strategy: Upgrade my gear as I scale—like going from bread to steak. Start with a basic PC, then level up to handle real-time charts or algorithmic trading.
Gameplay Note: If my hunger bar drops (system lags), I miss opportunities—like not mining fast enough before night falls.

3. Coins (Emeralds to Exchange with Villagers)
Role: My "currency" for bartering in the market village. In Minecraft, emeralds trade for gear; here, coins are my buying power.
Market Equivalent: Cash or liquid assets (e.g., USD, crypto) to invest or trade with. It’s the stack I use to swap for stocks, bonds, or options.
Survival Strategy: Farm emeralds smartly—start with a small pile (savings), trade up (invest for profit), and don’t blow it all on one villager (overinvesting). Keep some in reserve for emergencies.
Gameplay Note: Like trading with villagers, I’d seek the best deals—buy low, sell high, or snag undervalued assets.

4. Interface (Human or Agentic to Operate Through Internet)
Role: My "player character"—the way I interact with the market world. In Minecraft, it’s me clicking; here, it’s how I input trades or decisions.
Market Equivalent: Either me (human) manually trading via apps like Robinhood or Fidelity, or an "agentic" system (e.g., a bot or algorithm) I’ve set up to act on my behalf.
Survival Strategy: Start human (learn the ropes), then craft an agent (automate simple trades) as I level up—like taming a wolf to guard my base. Ensure the interface is reliable—no buggy controls!
Gameplay Note: A glitchy interface is like a broken mouse mid-battle—I’d lose control fast.

5. Internet (To Connect to a Server(s) That Is a Market(s))
Role: The "multiplayer server" connection. No internet, no market—it’s like playing single-player with no villagers to trade with.
Market Equivalent: A stable, fast internet connection to link me to exchanges (NYSE, Nasdaq), brokers, or data feeds. It’s my portal to the global market "world."
Survival Strategy: Lock in high-speed Wi-Fi or a wired connection. Have a backup (mobile hotspot) like carrying a spare pickaxe. Lag or disconnects could mean missing a trade window.

Gameplay Note: Think of markets as different servers—some are PvP (volatile), others peaceful (stable). I’d pick ones matching my skill level.

How It Plays Out

With these resources, I’d survive the market like a Minecraft pro:

Energy keeps my setup alive.
Computing Power lets me act fast and smart.
Coins give me trading ammo.
Interface is my hands on the controls.
Internet plugs me into the action.

Survival Mode Example

Day 1: I’ve got $500 (coins), a basic laptop (computing power), and Wi-Fi (internet). I plug in (energy) and use my phone app (interface) to buy a cheap ETF—my first "wheat farm."

Day 10: Profits grow my coins to $600. I research (knowledge) on X and spot a trending stock (opportunity). I trade manually (interface) and double my stack.

Day 30: I upgrade my laptop (computing power) and set up a bot (agentic interface) to scalp small gains while I sleep—now I’m a market villager with an emerald empire.

Hardcore Mode Twist

If one resource fails—say, internet drops—I’m out of the game. It’s like drowning in lava with no respawn. I’d prioritize redundancy (backup power, mobile data) to stay alive.

Refining the Framework

This ties your survival resources back to the earlier market-Minecraft analogy:

Resources (capital/knowledge) → Coins + knowledge to gather more.
Tools (indicators/models) → Built with computing power and interface.
Base (portfolio/assets) → Grows from coins and smart trades.
Opportunities (investments) → Found via internet and interface.
Resource Management (capital allocation) → Balances coins across energy, computing, etc.
Does this vibe with what you had in mind? Want to tweak the survival stakes or add more game mechanics?

Integration with Your Existing Agents
Here’s how the Critic and Planner fit into your Marketcraft system alongside the Action Agent, Observer, and Life Agent:

Observer: Summarizes the current situation (market, resources, intern status) for all agents.
Life Agent: Monitors survival-critical resources and flags issues (e.g., low intern hunger).
Planner: Sets the next task based on the current state and progress, guiding Steve strategically.
Action Agent: Executes the task by choosing a specific action (e.g., "Buy $20 ETF").
Critic: Evaluates the action’s outcome, providing feedback to refine Steve’s decisions.
This creates a cohesive loop:

Observer reports the situation.
Life Agent ensures survival needs are met.
Planner proposes the next task.
Action Agent acts on it.
Critic reviews the result, closing the feedback cycle.
Why These Prompts Work
Critic: Adapts the Minecraft example’s task-evaluation logic to Marketcraft’s trading context, focusing on survival, improvement, and financial growth. It provides actionable feedback, helping Steve learn from each move.
Planner: Mirrors the Minecraft planner’s mentoring approach but shifts focus to trading, resource management, and intern care. It ensures tasks are progressive, feasible, and aligned with Marketcraft’s goals.