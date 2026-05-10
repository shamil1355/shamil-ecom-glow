import './Certifications.css';

const Certifications = () => {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <h2 className="section-title fade-up">Certifications</h2>
        <div className="cert-grid">
          <div className="cert-card fade-up delay-100">
            <span className="cert-year">2025</span>
            <h3 className="cert-title">Artificial Intelligence</h3>
            <span className="cert-org">NoviTech R&D Pvt Ltd</span>
          </div>
          <div className="cert-card fade-up delay-200">
            <span className="cert-year">2024</span>
            <h3 className="cert-title">Enterprise Data Science</h3>
            <span className="cert-org">IBM</span>
          </div>
          <div className="cert-card fade-up delay-300">
            <span className="cert-year">2024</span>
            <h3 className="cert-title">VLSI System on Chip Design</h3>
            <span className="cert-org">Maven Silicon</span>
          </div>
          <div className="cert-card fade-up delay-100">
            <span className="cert-year">2024</span>
            <h3 className="cert-title">Project to Product</h3>
            <span className="cert-org">Eranad Knowledge City</span>
          </div>
          <div className="cert-card fade-up delay-200">
            <span className="cert-year">2023</span>
            <h3 className="cert-title">Scientific Computing & Data Science with Python</h3>
            <span className="cert-org">EKC</span>
          </div>
          <div className="cert-card fade-up delay-300">
            <span className="cert-year">March 2026</span>
            <h3 className="cert-title">Introduction to IoT</h3>
            <span className="cert-org">Certificate Code: 9961108</span>
          </div>
          <div className="cert-card nasa-badge fade-up delay-100">
            <span className="cert-year">October 2025</span>
            <h3 className="cert-title">Galactic Problem Solver</h3>
            <span className="cert-org">NASA Space Apps Challenge 2025</span>
          </div>
          <div className="cert-card nasa-badge fade-up delay-200">
            <span className="cert-year">October 2024</span>
            <h3 className="cert-title">Galactic Problem Solver</h3>
            <span className="cert-org">NASA Space Apps Challenge 2024</span>
          </div>
          <div className="cert-card nasa-badge fade-up delay-300">
            <span className="cert-year">October 2023</span>
            <h3 className="cert-title">Galactic Problem Solver</h3>
            <span className="cert-org">NASA Space Apps Challenge 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
