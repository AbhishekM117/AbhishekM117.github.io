---
title: "Beyond A/B Tests: Using Cohort Analysis to Model Product Commitment Before You Build It"
description: "When the cost of a wrong product bet is high, cohort analysis of past behaviour is more useful than a speculative experiment. Here's how retention curves moved a K4 number from 26% to 48% — before a single engineer was tasked."
pubDate: 2026-05-23
pillar: "Product / Strategy"
cover: "/assets/blog/port-bike.png"
tags: ["Cohort Analysis", "Retention", "Forecasting", "Product"]
draft: false
---

A/B tests are the right tool for a lot of product questions. They're not the right tool for every one. When the change you're considering is structural — a new pricing model, a commitment mechanism, a fundamental shift in how users onboard — running a live experiment carries real risk: you're changing real user journeys, and you can't always cleanly unwind what a failed test does to trust or revenue.

The alternative is to extract the signal from data you already have. Cohort analysis of existing retention behaviour can tell you a lot about what a proposed mechanism *would* do — before a single line of code is written.

## The problem we were modelling

Early churn was Port's most expensive problem. Nearly half of new riders were leaving within the first two weeks. Acquisition costs were being written off before users created any meaningful lifetime value. Leadership wanted to know whether an optional, time-limited commitment plan could change the curve — but not at the cost of a risky, hard-to-reverse live launch.

My job was to give them a defensible answer without running an experiment.

## Building the retention curves

The starting point was K0–K4 retention — tracking each monthly rider cohort from first rental (K0) through weeks one to four. Rather than monthly summaries, I went week-over-week, because the shape of the curve matters as much as where it lands.

What the data showed: a steep, non-linear drop between K1 and K3, with the curve flattening and stabilising after week four. The implication is direct — **the critical window is the first four weeks**. A commitment period shorter than that doesn't cover the risk zone. A longer one risks introducing the friction that makes new users walk away.

That data, not intuition, set the product decision.

## Modelling the commitment effect conservatively

Once the intervention window was clear, the modelling question became: what does a 4-week optional plan actually change?

There are two separable effects. The **contractual effect** is mechanical: a rider who opts into a commitment plan cannot churn during it. That's not a behavioural assumption — it's a structural one. The **behavioural effect** is speculative: do committed riders develop habits that keep them retained after the plan ends?

I modelled only the contractual effect. Zero behavioural uplift assumed. This is the most risk-averse stance available — if it doesn't pencil out under the conservative case, the product shouldn't be built.

At a 30% adoption rate — also modelled conservatively — the K4 retention rate moved from the baseline of **26% to 48%**. That's not a promise; it's a scenario with explicit assumptions attached. The model separated what was guaranteed from what was hoped for, and made both legible to the people making the decision.

## Why the denominator of adoption matters

One thing that's easy to miss: the adoption rate assumption doesn't just affect the magnitude of the result, it determines whether the effect is worth pursuing at all. If adoption is 10%, the contractual uplift is small and the operational overhead of running a commitment programme may not justify it. At 50%, you're describing a structural shift in how the business retains users.

Sensitivity analysis across adoption rates turned the model from a single forecast into a decision framework. Leadership could see the range of outcomes and choose which adoption threshold they believed the product team could realistically hit. That's a better conversation than "the model says 48% — trust us."

## What this approach buys you

A well-constructed cohort model of a proposed change does something an A/B test cannot: it answers the question before you bear the cost of being wrong. You're not asking "did this work?" — you're asking "given what our users have historically done, what would this mechanism change, and under what assumptions?"

The rider commitment plan was ultimately greenlit and built. The forecast gave leadership enough confidence in the logic to commit engineering resource. It didn't remove uncertainty — no model does — but it made the uncertainty explicit, bounded, and defensible. That's the job.

---

*The retention curves and cohort methodology behind this analysis are covered in more detail in the [Rider Retention case study](/projects/rider-retention-commitment).*
