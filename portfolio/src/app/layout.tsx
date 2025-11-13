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
      <body className="bg-terminal-bg text-terminal-text font-mono min-h-screen">
        {/* Terminal Header */}
        <header className="bg-[#1E1E1E] border-b border-terminal-green/30">
          <div className="max-w-6xl mx-auto px-4 py-3">
            {/* Terminal Window Controls */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-terminal-red"></div>
              <div className="w-3 h-3 rounded-full bg-terminal-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
              <span className="ml-4 text-sm text-terminal-text/70">tsujino@portfolio:~$</span>
            </div>
            {/* Navigation */}
            <nav>
              <ul className="flex gap-6 text-sm">
                <li>
                  <Link href="/" className="text-terminal-green hover:text-terminal-cyan transition-colors">
                    $ ./home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-terminal-green hover:text-terminal-cyan transition-colors">
                    $ ./about
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="text-terminal-green hover:text-terminal-cyan transition-colors">
                    $ ./works
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-terminal-green hover:text-terminal-cyan transition-colors">
                    $ ./contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Terminal Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-[#1E1E1E] border border-terminal-green/30 rounded-lg shadow-2xl p-6">
            {children}
          </div>
        </main>

        {/* Terminal Footer */}
        <footer className="mt-8 text-center py-4 text-terminal-text/50 text-sm border-t border-terminal-green/30">
          <p>
            <span className="text-terminal-green">~/portfolio</span> © {new Date().getFullYear()} Tsujino. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
