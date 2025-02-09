// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Tsujino's Portfolio",
  description: "Tsujino's Portfolio Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>{/* 必要に応じてメタタグを追加 */}</head>
      <body>
        <header className="header">
          <nav className="navbar">
            <ul className="menu">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link href="/works">WORKS</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main">{children}</main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Tsujino. All reights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
