import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="nav-img">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />

      </div>

      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <li><Link to="/#hero" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/#projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/#skills" onClick={closeMenu}>Skills</Link></li>
        <li><Link to="/#connect" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;