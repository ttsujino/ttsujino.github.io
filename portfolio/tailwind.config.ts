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
        background: "var(--background)",
        foreground: "var(--foreground)",
        terminal: {
          bg: "#1E1E1E",
          text: "#F0F0F0",
          green: "#50B050",
          blue: "#8A8A8A",
          yellow: "#B8B8B8",
          red: "#909090",
          purple: "#888888",
          cyan: "#959595",
          white: "#FFFFFF",
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
            color: theme('colors.terminal.text'),
            maxWidth: 'none',
            a: {
              color: theme('colors.terminal.green'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.terminal.white'),
              },
            },
            h1: {
              color: theme('colors.terminal.white'),
              fontWeight: '700',
              borderBottomWidth: '1px',
              borderBottomColor: 'rgba(255, 255, 255, 0.2)',
              paddingBottom: '0.3em',
            },
            h2: {
              color: theme('colors.terminal.white'),
              fontWeight: '700',
              borderBottomWidth: '1px',
              borderBottomColor: 'rgba(255, 255, 255, 0.1)',
              paddingBottom: '0.3em',
            },
            h3: {
              color: theme('colors.terminal.white'),
              fontWeight: '700',
            },
            h4: {
              color: theme('colors.terminal.white'),
              fontWeight: '700',
            },
            h5: {
              color: theme('colors.terminal.white'),
              fontWeight: '700',
            },
            h6: {
              color: theme('colors.terminal.white'),
              fontWeight: '700',
            },
            strong: {
              color: theme('colors.terminal.white'),
              fontWeight: '700',
            },
            code: {
              color: '#CE9178',
              backgroundColor: '#2D2D2D',
              padding: '0.2em 0.4em',
              borderRadius: '3px',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#2D2D2D',
              color: theme('colors.terminal.text'),
              padding: '1em',
              borderRadius: '5px',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: theme('colors.terminal.text'),
            },
            blockquote: {
              borderLeftColor: theme('colors.terminal.green'),
              borderLeftWidth: '4px',
              paddingLeft: '1em',
              color: '#B0B0B0',
              fontStyle: 'italic',
            },
            ul: {
              listStyleType: 'disc',
            },
            ol: {
              listStyleType: 'decimal',
            },
            li: {
              color: theme('colors.terminal.text'),
            },
            'ul > li::marker': {
              color: theme('colors.terminal.green'),
            },
            'ol > li::marker': {
              color: theme('colors.terminal.green'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
