import { IconMail, IconPhone, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="contact-title fade-up">Collaborate.</h2>
        <p className="contact-subtitle fade-up delay-100">Open to internships and opportunities in robotics, embedded systems, and AI.</p>
        
        <div className="contact-links fade-up delay-200">
          <a href="mailto:shamilkp4729@gmail.com" className="contact-btn">
            <IconMail size={20} /> Email
          </a>
          <a href="tel:+918129664729" className="contact-btn">
            <IconPhone size={20} /> Phone
          </a>
          <a href="https://github.com/shamil1355" target="_blank" rel="noopener noreferrer" className="contact-btn">
            <IconBrandGithub size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/shamilkp1355/" target="_blank" rel="noopener noreferrer" className="contact-btn">
            <IconBrandLinkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
