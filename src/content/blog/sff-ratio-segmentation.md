---
title: "The SFF Ratio: Telling Abuse from Operational Failure with Segmentation"
description: "A spike in Self-Force-Finish events looked like abuse. Segmentation revealed it was high-value customers signalling a GPS black hole — and the fix belonged in product, not policy."
pubDate: 2026-04-15
pillar: "Segmentation"
cover: "/assets/blog/aerial-city.jpg"
tags: ["Segmentation", "User Behaviour", "Operations", "Product"]
draft: false
---

When the Self-Force-Finish (SFF) rate spiked — riders manually ending rides outside the normal return flow — the instinct was to reach for the policy lever. Tighten the rules, issue warnings, penalise the pattern. That would have been a mistake.

The problem with acting on the raw SFF count is that it treats all events as equivalent. Abuse and operational failure produce the same signal. Telling them apart required a proper segmentation model, and the conclusion it reached was the opposite of what the raw numbers suggested.

## Designing the SFF Ratio

The metric is straightforward: **SFF Ratio = total SFF events / total rentals, per user**, measured over a rolling window. Users above 25% are flagged as high-risk. Users below — particularly those with a long rental history — are not.

What matters is what you do next. The ratio alone tells you *who* is generating the signal. To understand *why*, you cross-reference it with user value. That pairing is where the real analysis lives.

## The Leicester Square inversion

Q-Park Leicester Square was the #1 SFF hotspot in the network — over 3,000 events. Under a volume-based analysis, this looks like a serious abuse problem that needs strict enforcement.

Segmentation inverted that conclusion entirely. The users generating those 3,000+ events were overwhelmingly **high-value customers** — not the low-value, high-risk profile you'd target with penalties. Their SFF ratio was around 2.73% median, nowhere near the threshold that signals abuse.

What 3,000 SFF events from loyal customers actually means: a **critical, recurring operational failure** at that location. GPS black holes and parking beacon failures are common in dense urban environments, and riders who can't end their ride through normal means are left with no option but to force-finish. Those events aren't a signal of bad intent — they're 3,000 unhandled support tickets from the people you most need to retain.

## Two tracks, not one

The right response isn't a single policy — it's two separate interventions tied to what the data actually shows.

**Track 1 — Product fix:** Prioritise engineering investigation at Leicester Square. The high-value users generating events there are not a policy problem; they're a product problem. Penalising them would accelerate churn from the cohort with the highest LTV.

**Track 2 — Targeted enforcement:** Apply abuse controls where the high-risk SFF ratio concentration is genuinely elevated — locations where the user composition actually matches the risk profile. The two tracks share nothing except the underlying metric.

Without segmentation, you'd apply Track 2 everywhere and punish your best riders for a GPS problem. The ratio and the user-value cross-reference are what keep those tracks separated.

## The burst pattern as a product signal

There's a secondary finding worth noting. On days when a user triggered SFF, they averaged 1.3–1.9 SFF events — a burst pattern rather than a steady drip. That clustering points to an acute failure state: a session where the app froze or a server timeout propagated across the ride. It looks like a behavioural trend on the surface; it's a bug report underneath.

Segmentation doesn't just protect your best customers from misapplied policy. It routes the signal to the right team — in this case, not anti-abuse, but product engineering.

---

*The full analysis and segmentation model are covered in the [De-risking SFF case study](/projects/sff-operational-failure).*
