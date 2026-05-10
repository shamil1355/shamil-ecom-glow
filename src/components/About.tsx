import './About.css';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title fade-up">About</h2>
        <div className="about-grid">
          <div className="bio fade-up delay-100">
            <p className="bio-lead">A deep passion for bringing machines to life through elegant engineering.</p>
            <p>I am a B.Tech Electronics & Communication Engineering student at Eranad Knowledge City Technical Campus, Kerala.</p>
            <p>Since September 2022, I have served as the Hardware Lead at Motridox Robotics, where I build robotics prototypes end-to-end. My work involves designing electronic hardware, writing embedded software, and ensuring seamless systems integration.</p>
            <p>Beyond personal projects, I thrive in collaborative environments. I participated in the prestigious NASA Space Apps Challenge and secured 2nd place at the Zilkathon Hackathon. I am also an active member of the NSS, IEDC, and IEEE Student Branch at my campus.</p>
          </div>
          <div className="skills-container fade-up delay-200">
            <h3 className="skills-title">Technical Expertise</h3>
            <div className="skills-list">
              {['Python', 'Embedded C', 'MATLAB', 'Arduino IDE', 'ESP32', 'Raspberry Pi', 'OpenCV', 'Flutter', 'REST API', 'IoT', '8051 Microcontroller', 'HDL/VLSI', 'AI/ML', 'Cloud Integration', 'Git & GitHub'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
            
            <h3 className="skills-title">Core Domains</h3>
            <div className="domains-list">
              <div className="domain-item">Robotics & Autonomous Systems</div>
              <div className="domain-item">Embedded Systems Design</div>
              <div className="domain-item">VLSI System on Chip Design</div>
              <div className="domain-item">Data Science & AI/ML</div>
              <div className="domain-item">IoT & Smart Systems</div>
              <div className="domain-item">Computer Vision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
