---
title: "Stabilising Early Rider Retention with a Commitment Plan"
description: "Modelled an optional 4-week commitment plan to mitigate early churn, with forecasting that showed a path from 26% to 48% K4 retention."
company: "Port"
role: "Principal Data Analyst"
period: "2025"
stack: ["BigQuery", "Cohort Analysis", "Forecasting", "Looker"]
metrics:
  - { value: "26%→48%", label: "modelled K4 retention" }
  - { value: "30%", label: "assumed adoption" }
  - { value: "K0–K4", label: "cohort horizon" }
pdf: "/assets/reports/rider-retention.pdf"
cover: "/assets/blog/port-bike.png"
featured: true
order: 2
draft: false
---

Early churn is the most expensive churn — you pay to acquire a rider and lose them before they're worth anything. The question wasn't *whether* riders were leaving, but whether a product mechanism could change the curve before we built it.

## Approach

I built K0–K4 retention curves from rider cohorts and used them to model a proposed **optional 4-week commitment plan**. Rather than guess at the impact, I forecast the K4 retention curve under a conservative adoption assumption.

## Finding

At an assumed 30% adoption, the model moved **K4 retention from 26% (current) to 48%** — a step-change in how predictable downstream revenue becomes. Crucially, the analysis framed this as a *modelled scenario*, not a promise: the lever, the assumption, and the sensitivity were all explicit so the product decision could be made with eyes open.

## Why it mattered

Cohort modelling let us pressure-test a product change **before** committing engineering effort to it — de-risking the roadmap and giving leadership a defensible forecast rather than a hopeful one.
