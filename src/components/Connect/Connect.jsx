import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Connect.css';

const Connect = () => {
  return (
    <section className="connect-section" id="connect">
      <h2 className="connect-title">Let's Connect</h2>
      <p className="connect-subtitle">
        Ready to discuss new opportunities, collaborations, or just chat about technology
      </p>
      <div className="connect-grid">
        <a href="tel:+918077822679" className="connect-card green">
          <FaPhoneAlt className="connect-icon" />
          <h3>Phone</h3>
          <p>+91 8077822679</p>
        </a>
        <a href="mailto:yakshgaur12@gmail.com" className="connect-card red">
          <FaEnvelope className="connect-icon" />
          <h3>Email</h3>
          <p>yakshgaur12@gmail.com</p>
        </a>
        <a
          href="https://www.linkedin.com/in/yaksh-gaur-a09ab225a/"
          target="_blank"
          rel="noopener noreferrer"
          className="connect-card blue"
        >
          <FaLinkedin className="connect-icon" />
          <h3>LinkedIn</h3>
          <p>Yaksh-Gaur</p>
        </a>
        <a
          href="https://github.com/YakshGaur"
          target="_blank"
          rel="noopener noreferrer"
          className="connect-card dark-red"
        >
          <FaGithub className="connect-icon" />
          <h3>GitHub</h3>
          <p>Yaksh-Gaur</p>
        </a>
      </div>
    </section>
  );
};

export default Connect;