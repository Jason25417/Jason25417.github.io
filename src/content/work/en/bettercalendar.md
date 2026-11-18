---
title: BetterCalendar
summary: A scheduling app for macOS and iOS that I am building for my own daily use. In testing, with the source public.
---

## The idea

I wanted a calendar that helps me get through a day instead of grading me on it. BetterCalendar takes plans in natural language, writes them to Apple's Calendar and Reminders, and walks me through the day one step at a time. When the day drifts from the plan, it reflows what is left.

Two rules shape the design. Feedback should be positive, never a list of what I failed to do. And the app should recover on its own when one thing goes wrong, because one early failure should not sink the whole day.

## Where it stands

The model has changed more than once. An early version had separate mechanisms for daily routines and long-running tasks. In July 2026 I threw that out and rebuilt it around a single timeline.

I have used it daily since October 2026. It is on TestFlight and not yet on the App Store. Right now I am narrowing it to two jobs: record how each day was actually spent, and suggest what to do next.
