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
    }),
    presetForms(),
    presetHeroPatterns(),
    presetScrollbar(),
  ],
  rules: [
    ["font-display", { "font-family": '"Montserrat", sans-serif;' }],
    ["font-body", { "font-family": '"Mulish", sans-serif;' }],
    [
      "text-f-xs",
      { "font-size": "clamp(0.63rem, calc(0.88rem + -0.26vw), 0.82rem);" },
    ],
    [
      "text-f-sm",
      { "font-size": "clamp(0.88rem, calc(1.02rem + -0.14vw), 0.99rem);" },
    ],
    [
      "text-f-base",
      { "font-size": "clamp(1.19rem, calc(1.17rem + 0.08vw), 1.25rem);" },
    ],
    [
      "text-f-lg",
      { "font-size": "clamp(1.43rem, calc(1.33rem + 0.45vw), 1.77rem);" },
    ],
    [
      "text-f-xl",
      { "font-size": "clamp(1.71rem, calc(1.5rem + 1.04vw), 2.5rem);" },
    ],
    [
      "text-f-2xl",
      { "font-size": "clamp(2.05rem, calc(1.66rem + 1.95vw), 3.53rem);" },
    ],
    [
      "text-f-3xl",
      { "font-size": "clamp(2.46rem, calc(1.8rem + 3.33vw), 5rem);" },
    ],
    [
      "text-f-4xl",
      { "font-size": "clamp(2.96rem, calc(1.87rem + 5.41vw), 7.07rem);" },
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
