import { defineConfig } from "vitepress";
import autoNav from "vite-plugin-vitepress-auto-nav";

export default defineConfig({
  // ...
  vite: {
    plugins: [autoNav({ summary: { target: "SUMMARY.md" } })],
  },
});
