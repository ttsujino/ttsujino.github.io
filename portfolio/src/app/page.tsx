// app/page.tsx
import PageTransition from "../components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <section className="space-y-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-terminal-white">
            Takeshi Tsujino
          </h1>
          <div className="space-y-2 text-terminal-text/80">
            <p>Machine Learning Engineer | Data Scientist</p>
            <p>Based in Japan</p>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <p className="text-terminal-text/70 text-sm leading-relaxed">
            Working as a Machine Learning Engineer specializing in deep learning model development and implementation.<br />
            After graduating from Osaka University Faculty of Law, worked as a system administrator at an independent administrative agency,<br />
            and currently serving as a Senior Engineer at Ridge-i Inc.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
