# Marketcraft

![IMG_2067](https://github.com/user-attachments/assets/448bbae1-0b0e-478d-8dac-87d875543e01)

Welcome to Marketcraft, a survival-trading game where **Steve**, a self-coding AI
trader, battles to thrive in a market "server" inspired by Minecraft mechanics
and [Voyager](https://github.com/MineDojo/Voyager) agent.

The proof of concept has been drafted for [stableslabs.com] for the coding challenge.

# Intro

The agent starts by understanding the current environment.
Then builds its own tools.
Then attempts to form and backtest a strategy.

- Planner => Concept => Agent
- Universal Framework => Concepts
- Agent => Goal => Task

- Strategy => Data Stream => Indicator => Trade Engine

I've streamlined, simplified and modernized the Voyager concept
and wrote it on typescript as a custom framework.

My approach:

Python code is an output of LLM, not the other way around. It should not be used 
to write agents on them. I still needed some higher level language to quickly draft a 
concept with easy async/await and I/O so I've picked Bun and TS for a start.

All AI corpo wants you to wait in a queue at times of high traffic, time is more
expensive than tokens.

The project is using local deepseek and llama3 models since the main bottleneck is
not about capabilities of the model but rather its proper usage.

# Features

Things are still a little bit shaky and more conceptual than a concrete implementation.

The core idea is:

1. Self assesment
2. On demand agents
3. Autonomous strategy testing and generation

# Caveats

- Manager and Planner systems are not connected together quite yet.
- Observer and Planner are not operating within an Agent `chat()`, but `ask()`

## Observer

Universal framework for autonomous agent/system
design, structured by tiered progression and core principles:

- Observer => Concept => {Desiniton, Question}[]
- Progression => Concept => Question
- Manager => Task 

[Full doc](https://github.com/jellyninjadev/steve/blob/master/docs/Observer.md)

## Planner

Universal starting point for operational procedures and a modular,
self-referential framework within the same LLM.

- Planner => Task => Agents
- Agent => Task

[Full doc](https://github.com/jellyninjadev/steve/blob/master/docs/Planner.md)

## Strategy

This is a newer, more refined approach, another version of Manager + Planner.
It is a good candidate for integration within Agent chat workflow.

## Agent

Universal agent that themes itself per workflow.
I took an inspiration from codecompanion neovim plugin for augmenting 
initial prompt with arguments, commands and other agents.

[Full doc](https://github.com/jellyninjadev/steve/blob/master/docs/Agent.md)

# State of the project

The project is very young and yet to obtain its conceptually rigid form.
For a 1 month I was able to come up with feasable concept that paves a way
for a self writing AI agent.

The cli agent showing a good potential, it could sit at bib.
Watch out! There is no confirmation for execution of shell commands.

# Additional resources

- [Emotional Trading Notion template](https://jelly-ninja.notion.site/Emotional-Trading-1572aef5339180858afef19fa38b62db)

# Support

A little baby brainrot has been stuck in a limbo just like it's creator and looking
for your help to get back into trading.

[https://x.com/brainrot_trades](brainrot_trades)
