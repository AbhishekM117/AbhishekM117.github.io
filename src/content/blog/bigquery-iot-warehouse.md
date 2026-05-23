---
title: "From Zero to KPI: Architecting a BigQuery Warehouse for IoT Telemetry"
description: "The architectural decisions behind standing up a production-grade GCP warehouse that handles high-velocity IoT streams and still answers an exec's question in seconds."
pubDate: 2026-02-18
pillar: "Engineering / Platform"
cover: "/assets/blog/server-cables.jpg"
tags: ["BigQuery", "IoT", "Airflow", "GCP"]
draft: false
---

When you build a data warehouse from nothing, the hardest part isn't the SQL. It's deciding what "trustworthy" means before anyone has asked you for a number — and then engineering backwards from that promise.

At Port, the platform had to serve two very different shapes of data at once: tidy, batch application records, and a firehose of IoT telemetry from bikes and docks in the field. Those streams don't behave the same way, and pretending they do is how warehouses rot.

## Separate the streams before you join them

Batch app data is well-formed and arrives on a schedule. Telemetry is the opposite — out of order, occasionally duplicated, sometimes missing, and high-velocity. The instinct to dump both into one wide table is a trap. I landed raw telemetry untouched in a staging layer, then built explicit cleaning and conformance steps before anything reached the modelled layer the business queries.

The rule I keep coming back to: **the layer a stakeholder touches should never be the layer where you're still arguing with the data.**

## Model for the question, partition for the bill

BigQuery makes it easy to be lazy and expensive. Two habits paid for themselves immediately:

- **Partition and cluster on how telemetry is actually queried** — almost always a time window scoped to a device or location. Getting this right turns a full-table scan into a few cents.
- **Pre-aggregate the metrics people ask for daily.** Executives don't want raw events; they want a swap count, a utilisation rate, a fleet-pressure number. Materialising those keeps dashboards fast and costs predictable.

## Contracts are the real product

The thing that moved trust the most wasn't a dashboard — it was the **data contract**. Each upstream source committed to a schema, a freshness window, and a set of automated tests that ran in the pipeline. When something drifted, the pipeline told us before a stakeholder did. That single change is the difference between "the dashboard looks weird" and "we caught a sensor regression at 6am."

## What I'd tell my past self

Build the warehouse like you'll have to hand it over tomorrow. Lineage, tests, and naming conventions feel like overhead on day one and like oxygen on day ninety. Zero to v1 is not about shipping the first KPI — it's about shipping the first KPI you'd stake your name on.
