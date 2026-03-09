// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://reliable-gnome-2a4623.netlify.app/",
  integrations: [preact()],
});