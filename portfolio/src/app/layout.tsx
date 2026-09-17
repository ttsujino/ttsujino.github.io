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
      <body className="bg-white text-black font-mono min-h-screen">
        {/* Simple Header */}
        <header className="border-b border-black">
          <div className="max-w-3xl mx-auto px-6 py-6">
            <nav>
              <ul className="flex gap-6 text-base">
                <li>
                  <Link href="/" className="text-black underline">
                    home
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-black underline">
                    work
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-black underline">
                    blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-3xl mx-auto px-6 py-12">
          {children}
        </main>

        {/* Simple Footer */}
        <footer className="mt-16 text-center py-6 text-black text-xs border-t border-black">
          <p>© {new Date().getFullYear()} Tsujino</p>
        </footer>
      </body>
    </html>
  );
}
