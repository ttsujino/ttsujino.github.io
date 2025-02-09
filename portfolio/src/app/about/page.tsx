import PageTransition from "../../components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="about">
        <h1>About Me</h1>
        <p>A brief overview of my professional journey:</p>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2018.3</div>
            <div className="timeline-content">
              <h3>Graduated from Osaka University (Faculty of Law)</h3>
              <p>
                Developed a strong foundation in legal principles and critical thinking.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2018.4</div>
            <div className="timeline-content">
              <h3>Started as an Information Systems Administrator</h3>
              <p>
                Joined an independent administrative agency, refining my technical and management skills.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2020.9</div>
            <div className="timeline-content">
              <h3>Joined Ridge-i Inc as a Machine Learning Engineer</h3>
              <p>
                Transitioned into machine learning and contributed to innovative, data-driven projects.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2022.1</div>
            <div className="timeline-content">
              <h3>Promoted to Senior Engineer</h3>
              <p>
                Recognized for my expertise and leadership, I assumed greater responsibilities in my role.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
