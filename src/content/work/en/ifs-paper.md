---
title: A Relative Variational Principle for Expanding Iterated Function Systems
summary: A paper in dynamical systems, co-authored with Gregory Hemenway and on arXiv since August 2026.
---

## What the paper is about

Topological entropy measures how complicated a dynamical system is by counting the orbits you can tell apart at a given resolution. A variational principle connects that count to probability: the topological entropy equals the largest entropy that any invariant measure can carry.

This paper proves a relative version for expanding iterated function systems. Here the system is a family of maps applied in an order set by a driving sequence, and entropy is measured fiber by fiber over that sequence. The result relates fiberwise topological entropy to relative metric entropy.

## My part

Gregory Hemenway led the project. He guided me through the theorems, the examples, the notation, and the overall structure, and I worked through the proofs in detail.

While auditing the main estimates I found that one claim, as written, was false. The argument pulled balls back along inverse branches and treated the results as Bowen balls of half the radius. They are not: the scale grows along the orbit, and the Bowen distance takes a maximum over the whole orbit. I wrote out an explicit counterexample, and we rebuilt that step from a finer cover, so the constant no longer depends on the iterate.

## Where it stands

The preprint is arXiv:2608.18426 in math.DS, posted in August 2026.
