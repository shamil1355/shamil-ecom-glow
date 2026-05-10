import { IconArrowDown } from '@tabler/icons-react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="availability-row fade-up">
            <span className="availability-line"></span>
            <span className="availability-text">Available for Opportunities</span>
          </div>
          <h1 className="hero-title fade-up delay-100">
            Mohammed<br />
            <span className="text-gold">Shamil</span><br />
            K P
          </h1>
          <p className="hero-subtitle fade-up delay-200">
            Electronics & Communication Engineering student specialising in robotics system design, embedded programming, and hardware-software integration. Building autonomous systems that solve real-world problems.
          </p>
          <div className="hero-actions fade-up delay-300">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
            <a href="/Mohammed_Shamil_CV.pdf" download className="btn btn-outline">
              Download CV <IconArrowDown size={18} />
            </a>
          </div>
          <div className="hero-stats fade-up delay-300">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years in Robotics</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Research Paper</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">9</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
