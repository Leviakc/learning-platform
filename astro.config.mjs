// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
    fallback: {
      en: "es",
    },
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
