import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">PORTFOLIO</h2>
      <p className="footer-subtitle">Web Developer & Machine Learning Engineer</p>
      <div className="footer-icons">
        <a href="https://github.com/YakshGaur" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/yaksh-gaur-a09ab225a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:yakshgaur12@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-copy">
        © 2025 Yaksh Gaur. Built with React.js
      </p>
    </footer>
  );
};

export default Footer;