---
title: Scritto
summary: Transcription and translation that run on your own device, for macOS and iOS. Free on the App Store.
---

## What it does

Scritto records speech and turns it into text on the device, using Whisper and Parakeet speech models locally. Transcript and translation are aligned on shared timestamps, so each translated line sits next to the sentence it came from. Recordings go into a searchable library that syncs over iCloud. The app is localized in seven languages.

## Measuring before believing

I wanted Scritto to tell speakers apart across recordings by voiceprint, so I built a test bench before building the feature. The bench sweeps voiceprint thresholds to find the equal error rate, and scores term-injection experiments by tcpWER on public corpora.

The number was bad. Across sessions, the speaker equal error rate came out at 41.5%, close to guessing. I retired that route on the measurement instead of tuning against it.

The same bench settled a smaller question. Apple's API offers a way to inject custom vocabulary into recognition. A controlled comparison from the command line showed it only takes effect with one of the two transcriber types, and switching the default engine to get it would have cost more accuracy than it gained.
