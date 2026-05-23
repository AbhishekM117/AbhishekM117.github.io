---
title: "Data Contracts as GDPR: How Data Quality Hardens PII Compliance"
description: "Reliability engineering and privacy compliance are usually treated as separate workstreams. They're the same discipline wearing two hats."
pubDate: 2026-01-27
pillar: "Governance / ML Ops"
cover: "/assets/blog/padlock-keyboard.jpg"
tags: ["GDPR", "Data Contracts", "Governance", "PII"]
draft: false
---

Most teams treat data quality and GDPR as separate problems owned by separate people. One is "make the dashboards reliable," the other is "don't get fined." In practice, the work overlaps almost completely — and noticing that overlap is a quiet superpower.

## A contract already knows where the PII is

A data contract specifies, for every field a source promises to deliver: its type, its meaning, its freshness, and its tests. To write one honestly, you have to answer a question GDPR also asks — *what is this field, and is it personal?*

Once you're labelling fields by meaning, tagging the ones that are PII costs almost nothing extra. The schema that makes your pipeline reliable becomes the map that makes your retention and access policies enforceable.

## Retention is just a freshness rule pointed the other way

Reliability work obsesses over freshness: how recent must this data be to be trusted? Privacy work obsesses over retention: how old is this data allowed to get before we must delete it? They're the same axis. If you've already built the machinery to reason about the age of a record, you've built most of the machinery to expire it on schedule.

## Access controls fall out of lineage

If you have real lineage — you know which downstream tables a PII field flows into — then "who can see this?" stops being a guess. You can scope access at the column level and trace exactly where a sensitive value could surface. Without lineage, every access decision is a leap of faith. With it, GDPR readiness is mostly bookkeeping you were already doing.

## The operating model

The lesson I took from this: don't staff privacy as a parallel project bolted onto a finished platform. Bake it into the same contracts, tests, and lineage you build for reliability. You end up with a system that is **trustworthy and compliant for the same reasons** — which is far cheaper, and far harder to quietly break.
