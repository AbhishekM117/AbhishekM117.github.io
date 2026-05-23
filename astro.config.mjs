// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// NOTE: This deploys to a GitHub *user* page (abhishekm117.github.io),
// which serves from the domain root — so no `base` path is needed.
// If you ever move this to a project repo, set `base: "/repo-name"`.
export default defineConfig({
  site: "https://abhishekm117.github.io",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // Code blocks in blog posts use this terminal-friendly theme.
      theme: "github-dark-default",
      wrap: true,
    },
  },
});
