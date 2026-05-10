import './Education.css';

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title fade-up">Education</h2>
        <div className="timeline education-list">
          <div className="timeline-item fade-up delay-100">
            <div className="timeline-date">Sep 2022 — Oct 2026</div>
            <div className="timeline-content">
              <h3>B.Tech Electronics & Communication</h3>
              <span className="timeline-role">Eranad Knowledge City Technical Campus, Kerala</span>
              <p className="timeline-desc">Core electronics, communication theory, signal processing, VLSI, embedded systems. Active in NSS, IEDC, IEEE Student Branch.</p>
            </div>
          </div>
          <div className="timeline-item fade-up delay-200">
            <div className="timeline-date">Jun 2020 — Mar 2022</div>
            <div className="timeline-content">
              <h3>Higher Secondary in Computer Science</h3>
              <span className="timeline-role">Darul Uloom Higher Secondary School, Kerala</span>
              <p className="timeline-desc">Computer Science & Info Systems. Programming, DBMS, web development. Participated in interschool tech events.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
