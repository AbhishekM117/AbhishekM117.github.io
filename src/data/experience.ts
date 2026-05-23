export type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: Role[] = [
  {
    company: "Port",
    title: "Principal Data Analyst",
    location: "London, UK",
    period: "Sep 2025 — Present",
    current: true,
    points: [
      "Built the BigQuery warehouse from zero to v1, integrating batch app data with high-velocity IoT telemetry streams under SLA-driven data contracts.",
      "Deployed Cloud Composer (Airflow) and standardised ELT — lineage, alerts, and automated data tests measurably improved trust and reliability.",
      "Stood up the exec KPI layer and self-serve BI in Looker, enabling weekly board-grade reporting and ad-hoc decisioning.",
      "Drove GDPR readiness — PII mapping, retention, access controls — and partner data-sharing guardrails.",
    ],
  },
  {
    company: "Easyship",
    title: "Product Data Analyst",
    location: "London, UK",
    period: "Nov 2024 — Aug 2025",
    points: [
      "Delivered single-source-of-truth metrics for onboarding, activation, and retention; cut decision latency by 30% with Power BI / Metabase.",
      "Authored PRDs, stories, and acceptance criteria for analytics features — improved feature adoption by 25% and reduced ops cost drivers by 19%.",
      "Modelled star schemas and instituted data dictionaries and lineage; improved cross-team handover clarity by 40%.",
      "Ran A/B and cohort analyses, packaging exec readouts into actions for PMs, COO, and Head of Ops.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    title: "Business Analyst (Level 3)",
    location: "Bangalore, India",
    period: "Apr 2023 — Oct 2023",
    points: [
      "Captured functional and non-functional requirements in regulated payments; wrote BDD and use cases with full traceability.",
      "Built Tableau / Power BI API-adoption views and tuned SQL/ETL to improve refresh times by 50%.",
      "Established metric governance and change control for audit-ready reporting.",
      "Created option assessments (TCO / sensitivity) to steer roadmap and risk-posture trade-offs.",
    ],
  },
  {
    company: "Altisource",
    title: "Data Analyst",
    location: "Bangalore, India",
    period: "Dec 2020 — Mar 2023",
    points: [
      "Unified MySQL, PostgreSQL, and Oracle into governed BI layers; Python data-quality checks cut reporting errors by 45%.",
      "Built usage and health dashboards surfacing activation, churn, and throughput signals for product and ops.",
      "Authored SOPs, data dictionaries, and onboarding packs that accelerated team ramp-up.",
      "Partnered with Finance and Supply Chain on reconciliations and vendor-performance KPIs.",
    ],
  },
];
