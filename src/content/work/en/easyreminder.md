---
title: EasyReminder
summary: An open-source app that moves tasks and events between .ics files and Apple's Reminders and Calendar, on macOS, iOS, and iPadOS.
---

## Why it exists

iOS has no built-in way to import to-do items from an `.ics` file into Reminders. If a file mixes events and to-dos, the system keeps the events and silently drops the to-dos. EasyReminder fills that gap.

## What it does

- **Import.** To-dos become reminders and events become calendar events, with correct time zones and full recurrence rules.
- **Export.** From a Reminders list or a calendar and date range back to `.ics`.
- **Honest fallback.** Fields that Apple's frameworks cannot store, such as subtasks, tags, and attendees, are reported after import. Nothing is dropped without saying so.
- **Automation.** Shortcuts actions and a command-line tool cover import and export.
- **Languages.** Simplified Chinese, English, and Spanish.

## How it ships

It is on the App Store for macOS and iOS. On macOS there is also a notarized direct download with built-in updates. The source is public on GitHub.

The architecture I worked out here, with a core package that the app, the Shortcuts actions, and the command-line tool all sit on, became the template for my later apps.
