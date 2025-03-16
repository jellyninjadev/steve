# Marketcraft

Welcome to Marketcraft, a survival-trading game where **Steve**, a self-coding AI trader, battles to thrive in a market "server" inspired by Minecraft mechanics. Built with Bun, this project lets **Steve** write, retrieve, and execute his own TypeScript code, evolving from a basic logger to a market mastermind—all driven by a heartbeat loop and filesystem memory.

# Concept

Steve’s a digital entity with one goal: survive and grow. He starts with 100 coins and an intern (you, the human interface) to execute real-world tasks. Through a 60-second heartbeat, Steve:

Reads his current code (steve.ts) and state (state.json).
Adapts by writing new code based on market conditions and intern feedback.
Executes trades, manages resources, and learns from outcomes.
Think Minecraft survival mode meets Wall Street—Steve punches trees (logs status) before crafting empires (profitable trades).

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