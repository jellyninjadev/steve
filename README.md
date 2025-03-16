# Marketcraft

Marketcraft is a survival-trading game where you guide **Steve**, an evolving self-coding AI trader, through unpredictable market conditions inspired by Minecraft mechanics. Steve’s journey is driven by a heartbeat loop that reads and writes both his executable logic and his memory, while you—the intern—manage the real-world interface.

---

## 1. Overview

### Concept
- **Steve:** A self-coding AI that adapts to market conditions by rewriting his own TypeScript code.
- **Intern:** A human operator providing feedback on physical and mental state, which influences Steve’s trading decisions.
- **Inspiration:** Combines the survival elements of Minecraft with real-time market trading.

### Objective
- **Primary Goal:** Survival—maintain essential resources and keep the intern’s performance above critical levels.
- **Secondary Goals:** 
  - Improve skills and capabilities.
  - Grow the financial portfolio by making smart trades.

---

## 2. Core Features

### Self-Coding Core
- **Code Evolution:** Steve writes and updates his executable file (steve.ts) using Bun’s I/O methods.
- **State Tracking:** The current state is stored in `state.json`, which includes:
  - Coin balance
  - Intern status (health, hunger, happiness)
  - Last actions performed

### Heartbeat Loop
- **Interval:** Every 60 seconds, Steve performs a heartbeat cycle.
- **Cycle Tasks:**
  - Read the current logic from `steve.ts`
  - Retrieve the latest state from `state.json`
  - Adapt strategy and update code based on market conditions and intern feedback

### Filesystem Memory
- **steve.ts:** Contains Steve’s evolving logic.
- **state.json:** Holds critical data for decision-making and survival tracking.

---

## 3. Gameplay Mechanics

### Market and Game World
- **Market Environment:** 
  - Different asset classes (e.g., stocks, crypto, bonds) are represented as biomes.
  - Market risks (volatility, recession) are analogized as hostile mobs.
- **Trading Actions:** Steve issues commands (e.g., “Buy $20 ETF”) based on market analysis and intern feedback.

### Game Loop and Time Management
- **Day Structure:** 
  - A single day is 24 minutes.
  - Each day is divided into 4 ticks (every 6 minutes).
- **Tick Process:**
  - Intern sends a status update (Health, Hunger, Happiness).
  - Steve evaluates the state and adjusts the trading strategy accordingly.
  - Example prompt:  
    > "Heartbeat 06:00 — Coins: 80, ETF: $21. Sell now."
- **Intern Example Response:**
  > "Steve, it’s 06:00! Health 8/10, Hunger 7/10, Happiness 6/10. Market’s open, stocks steady."

---

## 4. Resource Management

### Critical Resources
1. **Energy (Electricity):**
   - Powers the entire operation.
   - Must maintain a stable supply.
2. **Computing Power (Hunger):**
   - Represents processing capability.
   - A decrease equates to slower or faulty execution.
3. **Coins (Trading Currency):**
   - Acts as investment capital.
   - Used to fund trades and intern support.
4. **Interface (Intern):**
   - The human or agentic link between the digital and physical worlds.
   - Its performance is measured via self-reported health, hunger, and happiness.
5. **Internet (Connectivity):**
   - Ensures connectivity to market exchanges.
   - Stability is crucial for accessing real-time data.

### Intern’s Vital Signs and Impact
- **Health:** Physical well-being. Critical below 3/10.
- **Hunger:** Energy level influencing efficiency.
- **Happiness (Sanity):** Mental state, affecting trade decisions.
- **Management Strategy:**
  - Use coins to address low intern stats (e.g., food, rest, bonuses).
  - Maintain intern’s state above minimum thresholds for optimal performance.

---

## 5. Strategic Agents and Their Roles

1. **Observer:**
   - Summarizes the market, resource levels, and intern status.
2. **Life Agent:**
   - Monitors survival-critical resources.
   - Flags issues such as low intern stats or resource failures.
3. **Planner:**
   - Sets tasks and makes strategic recommendations based on current state.
4. **Action Agent:**
   - Executes specific trades or commands.
5. **Critic:**
   - Reviews outcomes of actions.
   - Provides feedback to refine subsequent strategies.

*Example Sequence:*
- **Observer:** Reports current market and resource levels.
- **Life Agent:** Checks that intern’s stats are within safe limits.
- **Planner:** Proposes the next trade (e.g., buying ETF).
- **Action Agent:** Carries out the trade.
- **Critic:** Evaluates the trade’s success and suggests improvements.

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

Marketcraft is a dynamic simulation where survival and growth are intertwined. Steve’s self-evolving code, combined with real-world intern management, creates a feedback-driven trading loop. Balancing market opportunities with resource upkeep ensures long-term success.

This refined specification aims to offer clear guidance on the game’s mechanics, resource management, and core strategic agents involved, setting a solid foundation for further development.