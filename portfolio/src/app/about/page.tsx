import PageTransition from "../../components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="space-y-8">
        <h1 className="text-2xl font-bold text-terminal-white">About</h1>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex gap-4 text-sm">
              <span className="text-terminal-text/50 min-w-[100px]">2018.3</span>
              <div className="flex-1 space-y-1">
                <h3 className="text-terminal-white">Osaka University, Faculty of Law - Graduated</h3>
                <p className="text-terminal-text/60 text-sm">
                  Built foundation in legal thinking and logical analysis
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex gap-4 text-sm">
              <span className="text-terminal-text/50 min-w-[100px]">2018.4</span>
              <div className="flex-1 space-y-1">
                <h3 className="text-terminal-white">Independent Administrative Agency - System Administrator</h3>
                <p className="text-terminal-text/60 text-sm">
                  Engaged in information system management and operations
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex gap-4 text-sm">
              <span className="text-terminal-text/50 min-w-[100px]">2020.9</span>
              <div className="flex-1 space-y-1">
                <h3 className="text-terminal-white">Ridge-i Inc. - Machine Learning Engineer</h3>
                <p className="text-terminal-text/60 text-sm">
                  Engaged in deep learning model development and implementation
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex gap-4 text-sm">
              <span className="text-terminal-text/50 min-w-[100px]">2022.1</span>
              <div className="flex-1 space-y-1">
                <h3 className="text-terminal-white">Promoted to Senior Engineer</h3>
                <p className="text-terminal-text/60 text-sm">
                  Taking on advanced technical responsibilities and leadership roles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
