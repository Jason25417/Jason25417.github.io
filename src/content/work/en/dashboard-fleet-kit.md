---
title: Dashboard Fleet Kit
summary: A small framework for the local dashboards that pile up around a personal project, with one manifest and one control-tower page. Source available.
---

## What it is

Every project of mine ends up with a few small local dashboards. After enough of them, starting, stopping, and finding them became its own chore. Dashboard Fleet Kit is the framework I pulled out of that: one manifest file that registers every dashboard, one control-tower page that starts and stops them and checks their health, and a micro-framework for writing a new one.

It uses only the Python standard library. No dependencies, no build step, no database.

## The first dashboard built on it

The issue-tree dashboard came out of my audit of [hotaru](/work/hotaru/). It reads a tree of issues live from GitHub, shows which issues have pull requests attached and which do not, and draws the dependency map between crates.

## Licence

Both are source available under the PolyForm Noncommercial licence: free for noncommercial use.
