---
title: "De-risking Self-Force-Finish: Abuse vs. Operational Failure"
description: "Segmentation that revealed a cluster of Self-Force-Finish events wasn't abuse at all — it was high-value customers signalling a critical GPS/operational failure."
company: "Port"
role: "Principal Data Analyst"
period: "2025"
stack: ["BigQuery", "User Segmentation", "Geospatial", "Python"]
metrics:
  - { value: "3,000+", label: "SFF events, one site" }
  - { value: ">25%", label: "high-risk SFF ratio" }
  - { value: "HVC", label: "true root cause" }
pdf: "/assets/reports/sff-analysis.pdf"
cover: "/assets/blog/aerial-city.jpg"
order: 3
draft: false
---

A spike in Self-Force-Finish (SFF) events looked, on the surface, like users gaming the system. The easy story was "abuse — tighten the rules." Segmentation told a very different story.

## Approach

I segmented users by their **SFF ratio**, flagging anyone above 25% as high-risk, then cross-referenced those users by value and location rather than treating all SFF events as equivalent.

## Finding

One location — Q-Park Leicester Square — accounted for **3,000+ SFF events**. But the users behind them weren't low-value abusers; they were **high-value customers**. That inverted the conclusion entirely: this wasn't behavioural abuse to be policed, it was a **critical GPS / operational failure** frustrating the best riders. The fix belonged in product and operations, not in anti-abuse rules.

## Why it mattered

Without segmentation, the company would have punished its most valuable users for a problem the platform was causing. Differentiating *who* was generating the signal turned a misread "abuse" pattern into a prioritised, urgent product fix.
