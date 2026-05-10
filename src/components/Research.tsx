import { IconBook } from '@tabler/icons-react';
import './Research.css';

const Research = () => {
  return (
    <section className="section" id="research">
      <div className="container">
        <h2 className="section-title fade-up">Research & Publications</h2>
        <div className="research-card fade-up delay-100">
          <div className="research-header">
            <div className="research-icon">
              <IconBook size={32} />
            </div>
            <span className="research-journal">IJCRT — International Journal of Creative Research Thoughts &middot; March 2026</span>
          </div>
          <h3 className="research-title">The V: Autonomous Waste Collection Robot</h3>
          <span className="research-id">Paper ID: IJCRT2603495</span>
          <p className="project-desc">
            Research on autonomous waste collection integrating computer vision, robotics, and IoT-enabled monitoring. Covers OpenCV-based waste classification, robotic arm control, autonomous navigation, and intelligent waste segregation using Raspberry Pi 4.
          </p>
          <div className="project-tech">
            <span className="tech-pill">OpenCV</span>
            <span className="tech-pill">Raspberry Pi 4</span>
            <span className="tech-pill">Robotics</span>
            <span className="tech-pill">IoT</span>
            <span className="tech-pill">Computer Vision</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
