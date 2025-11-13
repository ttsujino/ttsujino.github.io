import PageTransition from "../../components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="space-y-4">
        <div className="space-y-2">
          <p className="text-terminal-cyan">
            <span className="text-terminal-green">tsujino@portfolio</span>
            <span className="text-terminal-text">:</span>
            <span className="text-terminal-blue">~</span>
            <span className="text-terminal-text">$ cat about.log</span>
          </p>
          <div className="pl-4 border-l-2 border-terminal-green/30 space-y-4">
            <h1 className="text-2xl font-bold text-terminal-white">About Me</h1>
            <p className="text-terminal-text/80">A brief overview of my professional journey:</p>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          {/* Timeline Item 1 */}
          <div className="bg-terminal-bg/50 border border-terminal-green/20 rounded p-4 hover:border-terminal-green/40 transition-colors">
            <div className="flex gap-4">
              <div className="text-terminal-yellow font-bold min-w-[80px]">
                [2018.3]
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-terminal-cyan font-semibold">
                  Graduated from Osaka University (Faculty of Law)
                </h3>
                <p className="text-terminal-text/70 text-sm">
                  Developed a strong foundation in legal principles and critical thinking.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="bg-terminal-bg/50 border border-terminal-green/20 rounded p-4 hover:border-terminal-green/40 transition-colors">
            <div className="flex gap-4">
              <div className="text-terminal-yellow font-bold min-w-[80px]">
                [2018.4]
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-terminal-cyan font-semibold">
                  Started as an Information Systems Administrator
                </h3>
                <p className="text-terminal-text/70 text-sm">
                  Joined an independent administrative agency, refining my technical and management skills.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="bg-terminal-bg/50 border border-terminal-green/20 rounded p-4 hover:border-terminal-green/40 transition-colors">
            <div className="flex gap-4">
              <div className="text-terminal-yellow font-bold min-w-[80px]">
                [2020.9]
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-terminal-cyan font-semibold">
                  Joined Ridge-i Inc as a Machine Learning Engineer
                </h3>
                <p className="text-terminal-text/70 text-sm">
                  Transitioned into machine learning and contributed to innovative, data-driven projects.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="bg-terminal-bg/50 border border-terminal-green/20 rounded p-4 hover:border-terminal-green/40 transition-colors">
            <div className="flex gap-4">
              <div className="text-terminal-yellow font-bold min-w-[80px]">
                [2022.1]
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-terminal-cyan font-semibold">
                  Promoted to Senior Engineer
                </h3>
                <p className="text-terminal-text/70 text-sm">
                  Recognized for my expertise and leadership, I assumed greater responsibilities in my role.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-terminal-green mt-4">
          [EOF] End of file
        </p>
      </section>
    </PageTransition>
  );
}
