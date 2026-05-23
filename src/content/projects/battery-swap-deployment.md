---
title: "Optimising IoT Battery-Swap Deployment Strategy"
description: "Designed a normalised Swaps/Bike/Week metric to direct battery deployment to the fleets under genuine stress — and surfaced a sensor anomaly in the process."
company: "Port"
role: "Principal Data Analyst"
period: "2025"
stack: ["BigQuery", "Metric Design", "IoT Telemetry", "Looker"]
metrics:
  - { value: "15.2", label: "swaps/bike/week (top site)" }
  - { value: "60% SOC", label: "anomaly flagged" }
  - { value: "fleet pressure", label: "new normalised metric" }
pdf: "/assets/reports/battery-swap.pdf"
cover: "/assets/blog/urban-cycling.jpg"
order: 4
draft: false
---

Where should the next batch of batteries go? Ranking by raw swap volume just points at the biggest stations. I built a metric that points at the ones actually under strain.

## Approach

I designed **Swaps / Bike / Week** — a fleet-pressure metric that normalises demand by the number of bikes at each location, collapsing fleet size out of the comparison so per-bike intensity becomes visible.

## Finding

The metric prioritised **ParkBee Lanark Road at 15.2 swaps/bike/week** — a site whose pressure was invisible in volume terms. It also exposed an outlier: **Port Bancroft Road**, flagged for investigation into a 60%-state-of-charge swap anomaly that turned out to be a likely sensor error rather than real demand.

## Why it mattered

The right denominator changed the deployment strategy from "fund the biggest" to "relieve the most stressed," and gave the data-quality benefit of surfacing a sensor fault for free.
