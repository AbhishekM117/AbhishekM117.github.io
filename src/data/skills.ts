export type SkillGroup = {
  label: string;
  index: string; // e.g. "01"
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    index: "01",
    label: "Data Engineering & ML Ops",
    items: [
      "SQL (T-SQL / Postgres)",
      "Python (Pandas / NumPy)",
      "BigQuery",
      "Airflow (Cloud Composer)",
      "dbt",
      "IoT telemetry ingestion",
      "Data mesh concepts",
      "ML Ops monitoring",
    ],
  },
  {
    index: "02",
    label: "BI, Experimentation & Innovation",
    items: [
      "Looker, Power BI, Metabase",
      "A/B testing",
      "Cohorts & funnels",
      "KPI design",
      "GDPR / PII mapping",
      "Data contracts & lineage",
      "Exec storytelling",
      "LLM / GenAI exposure",
    ],
  },
  {
    index: "03",
    label: "Cloud & Architecture",
    items: [
      "GCP (BigQuery, Composer)",
      "Cloud architecture design",
      "Star-schema modelling",
      "IoT telemetry processing",
    ],
  },
  {
    index: "04",
    label: "Product & Business Acumen",
    items: [
      "PRDs & acceptance criteria",
      "Requirements elicitation / UAT",
      "OKRs & metric frameworks",
      "TCO / sensitivity analysis",
      "Vendor-performance KPIs",
      "Cross-functional facilitation",
    ],
  },
];
