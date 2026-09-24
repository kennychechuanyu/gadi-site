// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://gadi-psych.vercel.app",
  integrations: [tailwind()],
});
