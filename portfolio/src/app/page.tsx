// app/page.tsx
import PageTransition from "../components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-terminal-green">
          <span>$</span>
          <span className="animate-pulse">_</span>
        </div>
        <div className="space-y-2">
          <p className="text-terminal-cyan text-lg">
            <span className="text-terminal-green">tsujino@portfolio</span>
            <span className="text-terminal-text">:</span>
            <span className="text-terminal-blue">~</span>
            <span className="text-terminal-text">$ cat welcome.txt</span>
          </p>
          <div className="pl-4 border-l-2 border-terminal-green/30 space-y-3">
            <h1 className="text-2xl font-bold text-terminal-white">
              Welcome to Tsujino's Portfolio
            </h1>
            <p className="text-terminal-text">
              システム情報: Machine Learning Engineer | Data Scientist
            </p>
            <p className="text-terminal-text/80">
              現在のディレクトリには以下のコマンドが利用可能です:
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-terminal-cyan">• ./about   - 経歴とスキルを表示</p>
              <p className="text-terminal-cyan">• ./works   - プロジェクト一覧を表示</p>
              <p className="text-terminal-cyan">• ./contact - コンタクトフォームを表示</p>
            </div>
          </div>
          <p className="text-terminal-green mt-4">
            [OK] システム起動完了
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
