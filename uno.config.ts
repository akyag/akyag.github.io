import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";
import { presetHeroPatterns } from "@julr/unocss-preset-heropatterns";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
      collections: {
        "simple-icons": () =>
          import("@iconify-json/simple-icons/icons.json").then(
            (i) => i.default
          ),
        phosphor: () =>
          import("@iconify-json/ph/icons.json").then((i) => i.default),
        solar: () =>
          import("@iconify-json/solar/icons.json").then(
            (i) => i.default as any
          ),
      },
    }),
    presetForms(),
    presetHeroPatterns(),
    presetScrollbar(),
  ],
  rules: [
    ["font-display", { "font-family": '"Mulish", sans-serif;' }],
    ["font-body", { "font-family": '"Atkinson Hyperlegible", sans-serif;' }],
    [
      "text-f-xs",
      { "font-size": "clamp(0.80rem, calc(0.97rem + -0.18vw), 0.94rem);" },
    ],
    [
      "text-f-sm",
      { "font-size": "clamp(1.00rem, calc(1.07rem + -0.07vw), 1.06rem);" },
    ],
    [
      "text-f-base",
      { "font-size": "clamp(1.19rem, calc(1.17rem + 0.08vw), 1.25rem);" },
    ],
    [
      "text-f-lg",
      { "font-size": "clamp(1.34rem, calc(1.28rem + 0.30vw), 1.56rem);" },
    ],
    [
      "text-f-xl",
      { "font-size": "clamp(1.50rem, calc(1.38rem + 0.59vw), 1.95rem);" },
    ],
    [
      "text-f-2xl",
      { "font-size": "clamp(1.69rem, calc(1.49rem + 0.99vw), 2.44rem);" },
    ],
    [
      "text-f-3xl",
      { "font-size": "clamp(1.90rem, calc(1.60rem + 1.51vw), 3.05rem);" },
    ],
    [
      "text-f-4xl",
      { "font-size": "clamp(2.14rem, calc(1.70rem + 2.20vw), 3.82rem);" },
    ],
  ],
  theme: {
    colors: {
      geraldine: {
        "50": "#fff9f9",
        "100": "#fef2f2",
        "200": "#fddfdf",
        "300": "#fbcbcb",
        "400": "#f8a5a5",
        "500": "#f57e7e",
        "600": "#dd7171",
        "700": "#b95a58",
        "800": "#934c4c",
        "900": "#783e3e",
      },
      dark: {
        "50": "#333d3d",
        "100": "#313b3b",
        "200": "#2f3939",
        "300": "#2a3434",
        "400": "#293333",
        "500": "#242e2e",
        "600": "#222c2c",
        "700": "#1f2929",
        "800": "#1b2525",
        "900": "#111b1b",
      },
    },
  },
});
