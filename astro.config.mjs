// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    solidJs(),
    icon(),
    expressiveCode({
      frames: {
        showCopyToClipboardButton: false,
        extractFileNameFromCode: true,
      },
      themes: [
        "catppuccin-macchiato",
        "material-theme-palenight",
        "poimandres",
      ],
      removeUnusedThemes: false,
    }),
  ],
});
