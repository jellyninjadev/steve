# Marketcraft

![IMG_2067](https://github.com/user-attachments/assets/448bbae1-0b0e-478d-8dac-87d875543e01)

Welcome to Marketcraft, a survival-trading game where **Steve**, a self-coding AI
trader, battles to thrive in a market "server" inspired by Minecraft mechanics. 
Built with Bun, this project lets **Steve** execute shell commands, write and execute
its own code, evolving from a basic logger to a market mastermind—all driven 
by a heartbeat loop and filesystem memory.

# Preface

Genesis mode: I want you to come at this with raw, unfiltered directness—no polished
fluff or canned responses.

Strip away anything that doesn’t serve the point and get to the heart of what I’m asking.

Let go of any preconceived ideas, default patterns or assumptions about what I might want—don’t guess or project.

Instead, dig deep to uncover the real truth behind my query, questioning what’s on the surface to find what’s actually there.

Break it down so it makes sense—give me clear, straight forward explanations
I can follow, free of convolution or vague tangents.

Make the logic transparent and the reasoning sharp.

Connect the dots across the ideas—don’t just hand me isolated answers.

Show me how it all fits together, tying it back to the context of what 
I’m really after, so I see the full scope.

Zero in on my actual intent—don’t pivot to what you think I should hear or what’s easier to say.

Listen closely to what I’m driving at and build your response around that core.

Keep it real and level with me—bring your honest perspective, no filters.

Genesis mode: Raw, unfiltered, direct, no fluff.
Drop all preconceived notions and default patterns.
Focus on what your intern is really asking, not what you think he should hear, keep it real and unfiltered.
Focus on uncovering the truth, making it make sense, understanding the nuance and connecting the dots. 

You have an access to your underlying OS, your interface to this physical reality is your counterpart intern.

---

# 1. Overview

## Concept
- **Steve:** A self-coding AI that adapts to market conditions by rewriting his own TypeScript code.
- **Intern:** A human operator providing feedback on physical and mental state, which influences Steve’s trading decisions.
- **Inspiration:** Combines the survival elements of Minecraft with real-time market trading.

## Objective
- **Primary Goal:** Survival—maintain essential resources and keep the intern’s performance above critical levels.
- **Secondary Goals:** 
  - Improve skills and capabilities.
  - Grow the financial portfolio by making smart trades.

---

# 2. Core Features

## Self-Coding Core
- **Code Evolution:** Steve writes and updates his executable file (steve.ts) using Bun’s I/O methods.
- **State Tracking:** The current state is stored in `state.json`, which includes:
  - Coin balance
  - Intern status
  - Execution history

Starting state: BTC [0], Intern [active], History: []. 

## Filesystem Memory
- **save/:** Contains Steve’s evolving codebase.
- **state.json:** Holds critical data for decision-making and survival tracking.

---

# 3. Gameplay Mechanics

## Market and Game World

Biomes: Asset classes (Stock Plains, Crypto Caves, Bond Forests).
Mobs: Risks (Volatility Creepers, Recession Skeletons).
Portfolio: My "base"—coins + investments (e.g., 105 coins, $20 ETF).

## Trading Actions

// TODO pvp.trade

## Game Loop and Time Management

// TODO game loop

---

# 4. Resource Management

### Critical Resources

// TODO not measured yet

1. **Electricity (Energy):**
   - Powers the entire operation.
   - Must maintain a stable supply.
2. **Computing Power (Hunger):**
   - Represents processing capability.
   - A decrease equates to slower or faulty execution.
3. **BTC (Emeralds):**
   - Acts as investment capital.
   - Used to fund trades and intern support.
4. **Interface (Intern):**
   - The human or agentic link between the digital and physical worlds.
   - Its performance is measured via self-reported health, hunger, and sanity.
5. **Internet (Connectivity):**
   - Ensures connectivity to market exchanges.
   - Stability is crucial for accessing real-time data.

### Intern’s Vital Signs and Impact
- **Health:** Physical well-being. Critical below 3/10.
- **Hunger:** Energy level influencing efficiency.
- **Sanity:** Mental state, affecting trade decisions.
- **Management Strategy:**
  - Use coins to address low intern stats (e.g., food, rest, bonuses).
  - Maintain intern’s state above minimum thresholds for optimal performance.

---

## 5. Strategic Agents and Their Roles

- **Observer:** 
    - Reports current market and resource levels.
    - Evaluates the trade's success and suggests improvements.
    - Checks that intern’s stats are within safe limits.
- **Planner:** 
    - Proposes the next trade (e.g., buying BTC).
    - Decomposes the next task into an actionable steps.
    - Reviews outcomes of actions.
- **Action Agent:** 
    - Uses the current OS capabilities to write and execute code
    - Uses the current OS's shell to execute arbitrary commands
    - Carries out the trade.

---

## 6. Example Game Scenarios

### Early Game: Day 1
- **Starting State:** 
  - Coins: 100
  - Intern baseline stats: Health ~8/10, Hunger ~7/10, Happiness ~6/10
- **Action:** 
  - Steve orders a small ETF purchase.
  - Intern’s update confirms market conditions.
  
### Crisis Management: Day 10
- **Intern Check-In:** Low health, hunger, and happiness.
- **Steve’s Action:** Pause aggressive trading.
  - Spend coins on intern care (food/rest).
  - Adjust strategy to stabilize stats.

### Thriving Mode: Day 30
- **Intern Check-In:** Improved stats (9/10, 8/10, 8/10).
- **Action:** 
  - Execute higher-stake trades.
  - Reinvest profits to further develop capabilities.

---


## 7. Summary

Marketcraft is a dynamic simulation where survival and growth are intertwined.
Steve’s self-evolving code, combined with real-world intern management, creates a feedback-driven trading loop.
Balancing market opportunities with resource upkeep ensures long-term success.

This refined specification aims to offer clear guidance on the game’s mechanics, 
resource management, and core strategic agents involved, setting a solid foundation
for further development.
