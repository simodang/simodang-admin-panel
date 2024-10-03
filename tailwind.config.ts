import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // fontFamily: {
      //   ubuntu: ["Ubuntu", "ubuntu"],
      // },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        schemes: {
          light: {
            primary: "#040404",
            "on-primary": "#FFFFFF",
            "primary-container": "##282828",
            "on-primary-container": "#B5B3B3",
            secondary: "#745941",
            "on-secondary": "#FFFFFF",
            "secondary-container": "#FFDDC2",
            "on-secondary-container": "#5C432D",
            tertiary: "#944A00",
            "on-tertiary": "#FFFFFF",
            "tertiary-container": "#FF9F55",
            "on-tertiary-container": "#462000",
            error: "#BA1A1A",
            "on-error": "#FFFFFF",
            "error-container": "#FFDAD6",
            "on-error-container": "#410002",
            background: "#FEF7FF",
            "on-background": "#1D1B20",
            surface: "#F6F5F4",
            "on-surface": "#4C4C4D",
            "surface-variant": "#F2F2F1",
            "on-surface-variant": "#5A6866",
            outline: "#C1C1C1",
            "outline-variant": "#E6E6E6",
            "surface-tint": "#AD8257",
            shadow: "#000000",
            scrim: "#000000",
            "inverse-surface": "#322F35",
            "inverse-on-surface": "#F4F0EF",
            "inverse-primary": "#B1C5FF",
            "surface-dim": "#E8E8E8",
            "surface-bright": "#FDFDFD",
            "surface-container-lowest": "#FFFFFF",
            "surface-container-low": "#F8F8F8",
            "surface-container": "#EFEFEF",
            "surface-container-high": "#E8E8E8",
            "surface-container-highest": "#E1E1E1"
          },
          dark: {},
          "fixed-color": {
            "primary-fixed": "#DAE2FF",
            "on-primary-fixed": "#001947",
            "primary-fixed-dim": "#B1C5FF",
            "on-primary-fixed-variant": "#304578",
            "secondary-fixed": "#DCE2F9",
            "on-secondary-fixed": "#151B2C",
            "secondary-fixed-dim": "#C0C6DC",
            "on-secondary-fixed-variant": "#404659",
            "tertiary-fixed": "#FED7F9",
            "on-tertiary-fixed": "#2A122C",
            "tertiary-fixed-dim": "#E0BBDD",
            "on-tertiary-fixed-variant": "#593D59"
          }
        },
        system_light: {},
        system_dark: {},
      },
      fontSize: {
        "display-1": "64px",
        "display-2": "56px",
        "display-3": "48px",
        "display-4": "32px",
        "heading-1": "38px",
        "heading-2": "32px",
        "heading-3": "26px",
        "heading-4": "22px",
        "heading-5": "18px",
        "heading-6": "14px",
        "paragraph-lead": "18px",
        "paragraph-default": "14px",
        "paragraph-small": "12px",
        caption: "11px",
        "font-button-large": "16px",
        "font-button": "14px",
        "font-button-small": "12px",
        "font-form-label-lg": "18px",
        "font-form-label": "14px",
        "font-form-label-sm": "12px",
        "font-form-input-lg": "18px",
        "font-form-input": "14px",
        "font-form-input-sm": "12px",
        "font-form-placeholder-lg": "18px",
        "font-form-placeholder": "14px",
        "font-form-placeholder-sm": "12",
        "font-table-header": "13px",
        menu: "14px",
      },
    },
  },
  plugins: [],
};
export default config;

/*

*All hex value from 100% to 0% alpha: sample

* 100% — FF
* 99% — FC
* 99% — FC
* 98% — FA
* 97% — F7
* 96% — F5
* 95% — F2
* 94% — F0
* 93% — ED
* 92% — EB
* 91% — E8
* 90% — E6
* 89% — E3
* 88% — E0
* 87% — DE
* 86% — DB
* 85% — D9
* 84% — D6
* 83% — D4
* 82% — D1
* 81% — CF
* 80% — CC
* 79% — C9
* 78% — C7
* 77% — C4
* 76% — C2
* 75% — BF
* 74% — BD
* 73% — BA
* 72% — B8
* 71% — B5
* 70% — B3
* 69% — B0
* 68% — AD
* 67% — AB
* 66% — A8
* 65% — A6
* 64% — A3
* 63% — A1
* 62% — 9E
* 61% — 9C
* 60% — 99
* 59% — 96
* 58% — 94
* 57% — 91
* 56% — 8F
* 55% — 8C
* 54% — 8A
* 53% — 87
* 52% — 85
* 51% — 82
* 50% — 80
* 49% — 7D
* 48% — 7A
* 47% — 78
* 46% — 75
* 45% — 73
* 44% — 70
* 43% — 6E
* 42% — 6B
* 41% — 69
* 40% — 66
* 39% — 63
* 38% — 61
* 37% — 5E
* 36% — 5C
* 35% — 59
* 34% — 57
* 33% — 54
* 32% — 52
* 31% — 4F
* 30% — 4D
* 29% — 4A
* 28% — 47
* 27% — 45
* 26% — 42
* 25% — 40
* 24% — 3D
* 23% — 3B
* 22% — 38
* 21% — 36
* 20% — 33
* 19% — 30
* 18% — 2E
* 17% — 2B
* 16% — 29
* 15% — 26
* 14% — 24
* 13% — 21
* 12% — 1F
* 11% — 1C
* 10% — 1A
* 9% — 17
* 8% — 14
* 7% — 12
* 6% — 0F
* 5% — 0D
* 4% — 0A
* 3% — 08
* 2% — 05
* 1% — 03
* 0% — 00
*/
