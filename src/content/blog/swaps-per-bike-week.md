---
title: "Swaps/Bike/Week: Normalising Demand to Find Fleets Under Real Stress"
description: "Raw volume tells you where things are busy. A normalised metric tells you where they're about to break — and where to put your next pound of capital."
pubDate: 2026-01-09
pillar: "Operational Efficiency"
cover: "/assets/blog/urban-cycling.jpg"
tags: ["Metric Design", "Operations", "IoT"]
draft: false
---

Volume metrics are seductive because they're easy. The location with the most battery swaps must be the one that needs attention, right? Usually wrong — and that gap is where good metric design earns its keep.

## The problem with totals

A big station with a hundred bikes will always log more swaps than a small one with ten. Ranking by raw swap count just re-discovers fleet size. It tells you where the bikes *are*, not where they're under *pressure*. Capital deployed on that signal flows to the places that are already fine.

## Designing the right denominator

The fix is to normalise demand by the supply that's actually absorbing it. I built a metric I called **Swaps / Bike / Week** — fleet pressure. Dividing swap events by the number of bikes at a location over a fixed window collapses size out of the picture and surfaces the thing that matters: *how hard is each individual bike working?*

Suddenly a modest station running 15+ swaps/bike/week jumps to the top of the priority list — its small fleet is being thrashed, and that's exactly where the next batch of bikes or batteries earns the most return. The headline-grabbing high-volume station might be perfectly comfortable per bike.

## Normalised metrics also expose anomalies

There's a second payoff. Once every location sits on the same normalised scale, outliers stop hiding. A site whose numbers don't fit the pattern is no longer "just big" — it's genuinely strange, and worth investigating. In one case the anomaly turned out to be a sensor reporting swaps at an implausible state-of-charge — a data-quality bug masquerading as demand. A volume chart would never have flagged it.

## The principle

The metric you rank on quietly becomes your strategy. If you rank on volume, you fund size. If you rank on a thoughtfully normalised rate, you fund *stress* — and you find the broken sensors for free. Spend the time to choose the denominator. It's the cheapest leverage in operational analytics.
