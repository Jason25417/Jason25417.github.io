---
title: hotaru and hotaru_mqtt
summary: 38 merged pull requests into a Rust web framework and its MQTT crate, with write access since August 2026.
---

## The project

hotaru is a web framework in Rust from Field of Dream Studio, and hotaru_mqtt is its implementation of the MQTT messaging protocol. I joined in July 2026 at the maintainers' invitation. As of November 2026 I have 37 pull requests merged into hotaru_mqtt and one into hotaru itself.

## What I worked on

- **MQTT v5.** The wire format and version negotiation between clients and the broker.
- **A runtime-agnostic core.** Decoupling the protocol from the Tokio runtime so the crate no longer depends on it.
- **A `no_std` port.** I moved a `Send` bound off the `dyn` use-site and into a supertrait so the runtime compiles for single-threaded `no_std` targets. `spawn_local` errors went from 83 to 0, with 327 tests passing and no regression on `std`.
- **Structure.** I broke a circular dependency between the packet and codec modules by cutting the packet-to-codec edge: data definitions should not depend on encoding logic.
- **Broker hardening.** I argued against one proposed denial-of-service patch because it allocated before validating the client. Allocation has to follow validation.

## Starting over

The project requires contributors to defend their code in live review, line by line. My first patches worked, but I had leaned on AI assistance enough that I could not yet do that.

So in August I started again. I re-audited the code from the 0.8.2 base, filed everything that needed doing as issues, and rewrote the whole pull-request stack against those issues. To keep track of it I built [a dashboard that audits the issue tree](/work/dashboard-fleet-kit/). The maintainers granted me write access that month.
