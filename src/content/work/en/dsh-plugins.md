---
title: Plugins for DeepSeek Harness
summary: Three public plugins for the agent app I work in every day.
---

## Why plugins

DeepSeek Harness is the desktop app I run AI agents in. It has a plugin system, so when something in my daily workflow is missing, I check whether the host already exposes it, then whether someone has already written it, and only then write a plugin of my own.

## The three

- **dsh-composer-tweaks.** A file and folder picker for the message box, a switch between Markdown source and rendered view, and Markdown rendering for my own messages.
- **dsh-external-bridge.** A local HTTP bridge. Other programs on the same machine can open a real session, send it a prompt, and wait for the reply.
- **dsh-session-auto-rename.** Names sessions automatically from their content, weighted toward what was said most recently, and adds a right-click menu to the session list.
