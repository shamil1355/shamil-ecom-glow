import { useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo" aria-label="Home" onClick={closeMenu}>
          <span className="logo-mark">&#9670;</span>
          <span className="logo-text">Shamil</span>
        </a>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#research" onClick={closeMenu}>Research</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a 
            href="/Mohammed_Shamil_CV.pdf" 
            download 
            className="btn-nav-download"
            onClick={closeMenu}
          >
            Download CV
          </a>
        </div>
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
