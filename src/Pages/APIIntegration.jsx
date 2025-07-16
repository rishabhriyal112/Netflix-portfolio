import React from 'react';
import './Projects-pages.css';
import apiProjectImg from '../assets/api-Integration.png';

const APIIntegration = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <img src={apiProjectImg} alt="API Integration" className="project-image" />
        <div className="project-content">
          <h1 className="title">Live Project – API Integration (CareHive Pvt Ltd)</h1>
          <p className="description">
            This live project focuses on real-time location tracking and Aadhaar verification. Collaborating with the CareHive Pvt Ltd development
            team to ensure seamless AyesPI integration, clean architecture, and scalable backend systems.
          </p>
          <div className="tech-tags">
            <button>PHP</button>
            <button>REST API</button>
            <button>Aadhaar API</button>
            <button>LocationIQ API</button>
          </div>
          <a
            href="https://github.com/your-username/api-integration-project"
            target="_blank"
            rel="noopener noreferrer"
            className="join-button"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="details-section">
        <div className="detail-card">
          <h3>Project Highlights</h3>
          <ul>
            <li>Real-time location tracking using third-party APIs.</li>
            <li>Integrated Aadhaar verification for secure identity validation.</li>
            <li>Designed modular API structure for future scalability.</li>
          </ul>
        </div>
        <div className="detail-card">
          <h3>Development Status</h3>
          <p>Currently active in deployment and integration testing stage with production roll-out planned soon.</p>
        </div>
      </div>
    </div>
  );
};

export default APIIntegration;
