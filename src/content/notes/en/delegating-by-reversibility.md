---
title: Delegating to an AI by reversibility
description: How I decide what an AI agent may do without asking me first.
date: 2026-11-17
---

When I hand work to an AI agent, the question I ask is whether the action can be undone. How important the task is does not enter into it.

## Two tiers

**Reversible.** Editing files, running tests, refactoring locally, reading, drafting. The agent does these and reports afterwards. It does not ask.

**Irreversible, outward-facing, or costing money.** Sending a message, deleting data, publishing, changing shared configuration. The agent says what will happen and waits for my yes.

## Why reversibility and not importance

Importance is the intuitive axis, and it fails in both directions.

An important task that can be rolled back, such as rewriting a core module on a branch, gains nothing from a confirmation prompt. I would approve it anyway, and each prompt teaches me to approve without reading.

A trivial action that cannot be rolled back, such as one short email, deserves the pause. Once it is sent, the cost of a mistake is no longer mine to control.

## What it takes to make this work

- **A way to check afterwards.** For anything that deletes or overwrites in bulk, I want a list first or a snapshot kept, so I can verify the result myself.
- **Reminders that fire once.** If I have already decided how to handle a kind of risk, the agent records the decision and stops raising it, unless a fact has changed.
- **The agent names its own judgment calls.** When it picks between options on my behalf, it marks the choice so I can overrule it later.
