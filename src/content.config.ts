import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts — drop a new .md file in src/content/blog/ and it appears
// automatically in the blog index and RSS feed.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    pillar: z.string(), // e.g. "Engineering / Platform"
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(), // path under /public, e.g. "/assets/post.jpg"
    draft: z.boolean().default(false),
  }),
});

// Case studies / projects — same idea: add a .md file and it shows up.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string().default("Principal Data Analyst"),
    company: z.string(),
    period: z.string(), // e.g. "2025"
    stack: z.array(z.string()).default([]),
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),
    pdf: z.string().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
