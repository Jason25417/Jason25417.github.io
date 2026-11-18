---
title: A layered memory for AI agents
summary: The file-based memory I keep for the AI agents I work with, synced across two machines, and the ledger of what I can do without them.
---

## The problem

I work with AI agents every day, on a Mac and a Windows machine. Each session starts with no memory of the last one. Pasting everything back in does not scale: the record keeps growing, and what an agent can load at the start of a session is fixed.

## The layers

- **Weekly logs.** Each machine writes its own raw log and never edits the other's, so the two never conflict.
- **Topic files.** Once a week the logs are merged into a set of topics, such as one project or one habit of mine. These are rewritten in place, so they stay the same size as they get more accurate.
- **A short profile.** A page of stable preferences and facts that every agent loads at the start of a session. It changes only through a proposed diff that I approve.

Only the bottom layer is allowed to grow without limit. Everything an agent has to read stays within a fixed budget.

## The ledger

Working with AI makes it easy to lose track of what I can do myself. So next to the memory I keep a ledger of capabilities: each entry is a specific thing I claim I can do without AI, with a way to check it. Entries get spot-checked. A claim that fails is marked revoked and stays in the ledger.

The repository is private, since it is a record of my own work and habits.
