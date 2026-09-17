import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        terminal: {
          bg: "#ffffff",
          text: "#000000",
          green: "#000000",
          blue: "#000000",
          yellow: "#000000",
          red: "#000000",
          purple: "#000000",
          cyan: "#000000",
          white: "#000000",
        },
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: "#000000",
            maxWidth: "none",
            a: {
              color: "#000000",
              textDecoration: "underline",
              "&:hover": {
                color: "#000000",
              },
            },
            h1: {
              color: "#000000",
              fontWeight: "700",
            },
            h2: {
              color: "#000000",
              fontWeight: "700",
            },
            h3: {
              color: "#000000",
              fontWeight: "700",
            },
            h4: {
              color: "#000000",
              fontWeight: "700",
            },
            h5: {
              color: "#000000",
              fontWeight: "700",
            },
            h6: {
              color: "#000000",
              fontWeight: "700",
            },
            strong: {
              color: "#000000",
              fontWeight: "700",
            },
            code: {
              color: "#000000",
              backgroundColor: "#f3f3f3",
              padding: "0.2em 0.4em",
              borderRadius: "0",
              fontWeight: "400",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              backgroundColor: "#f3f3f3",
              color: "#000000",
              padding: "1em",
              borderRadius: "0",
              border: "1px solid #d4d4d4",
              overflowX: "auto",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              color: "#000000",
            },
            blockquote: {
              borderLeftColor: "#000000",
              borderLeftWidth: "4px",
              paddingLeft: "1em",
              color: "#000000",
              fontStyle: "italic",
            },
            ul: {
              listStyleType: "disc",
            },
            ol: {
              listStyleType: "decimal",
            },
            li: {
              color: "#000000",
            },
            "ul > li::marker": {
              color: "#000000",
            },
            "ol > li::marker": {
              color: "#000000",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
