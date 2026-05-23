---
title: "BigQuery Data Platform Foundation"
description: "Built Port's production data platform from zero — warehouse, pipelines, governance, and self-serve BI — as the sole Principal Data Analyst."
company: "Port"
role: "Principal Data Analyst"
period: "2025 — Present"
stack: ["BigQuery", "Cloud Composer (Airflow)", "Looker", "Python", "dbt"]
metrics:
  - { value: "0→v1", label: "warehouse built" }
  - { value: "IoT", label: "telemetry integrated" }
  - { value: "GDPR", label: "ready by design" }
cover: "/assets/blog/server-cables.jpg"
featured: true
order: 1
draft: false
---

As the first and sole Principal Data Analyst at Port, I built the foundational, production-grade data platform that now powers executive reporting, operational tooling, and product innovation.

## The mandate

There was no warehouse, no pipeline, and no agreed definition of a single core metric. The business needed board-grade reporting *and* the ability to answer ad-hoc operational questions — fed by both batch application data and high-velocity IoT telemetry from the field.

## What I built

- **Warehouse from zero to v1** on BigQuery, integrating batch app data with complex IoT telemetry streams under a layered architecture (raw → conformed → modelled).
- **Standardised ELT on Cloud Composer (Airflow)**, with data contracts, lineage, and automated data-quality tests that catch drift before stakeholders do.
- **An executive KPI layer and self-serve BI in Looker**, enabling weekly board reporting and ad-hoc decisioning without an analyst in the loop for every question.
- **GDPR readiness baked in** — PII mapping, retention rules, and column-level access controls derived directly from the same contracts that guarantee reliability.

## Impact

The platform turned a standing-start data function into a trusted source of truth. Executives get fast, consistent numbers; operations gets tooling built on data they can rely on; and privacy obligations are enforced by the same machinery that keeps the pipelines honest — rather than bolted on afterwards.
