import { IconArrowUpRight } from '@tabler/icons-react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title fade-up">Projects</h2>
        <div className="projects-grid">
          
          <div className="project-card fade-up delay-100">
            <div className="project-header">
              <h3 className="project-title">FaceLytix</h3>
              <span className="project-status">Completed</span>
            </div>
            <div className="project-subtitle">Intelligent Touchless Attendance System</div>
            <p className="project-desc">Real-time facial recognition attendance system using ESP32-CAM and OpenCV. Designed for schools and offices with secure, automated logging. Handled hardware installation, software integration, and full framework design.</p>
            <div className="project-tech">
              <span className="tech-pill">ESP32-CAM</span>
              <span className="tech-pill">Raspberry Pi</span>
              <span className="tech-pill">OpenCV</span>
              <span className="tech-pill">Python</span>
            </div>
            <a href="https://github.com/shamil1355/FaceLytix" target="_blank" rel="noopener noreferrer" className="project-link">
              View Repository <IconArrowUpRight size={16} />
            </a>
          </div>

          <div className="project-card fade-up delay-200">
            <div className="project-header">
              <h3 className="project-title">Westo</h3>
              <span className="project-status">Completed</span>
            </div>
            <div className="project-subtitle">Smart Waste Bin with Auto-Compression</div>
            <p className="project-desc">Smart waste management system integrating embedded systems, robotics, and a Flutter mobile app. Features automatic lid via servo/ultrasonic sensors and dual stepper motor compression using A4988 drivers.</p>
            <div className="project-tech">
              <span className="tech-pill">ESP32</span>
              <span className="tech-pill">HC-SR04</span>
              <span className="tech-pill">A4988</span>
              <span className="tech-pill">Flutter</span>
            </div>
            <a href="https://github.com/MotridoxRobotics/WasteBin" target="_blank" rel="noopener noreferrer" className="project-link">
              View Repository <IconArrowUpRight size={16} />
            </a>
          </div>

          <div className="project-card fade-up delay-300">
            <div className="project-header">
              <h3 className="project-title">The-V</h3>
              <span className="project-status">
                <span className="pulse-dot"></span>
                <span style={{ color: 'var(--champagne)' }}>Ongoing</span>
              </span>
            </div>
            <div className="project-subtitle">Autonomous Waste Management Robot</div>
            <p className="project-desc">Autonomous urban waste collection robot featuring CV-based navigation, a robotic arm for pickup, AI material classification, IoT cloud dashboard, and self-charging docking system.</p>
            <div className="project-tech">
              <span className="tech-pill">Computer Vision</span>
              <span className="tech-pill">AI/ML</span>
              <span className="tech-pill">IoT</span>
              <span className="tech-pill">OpenCV</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
