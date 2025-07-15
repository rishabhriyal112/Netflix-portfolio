import React from 'react';
import './Projects-pages.css'; // or './ToolsHub.css' depending on your structure
import toolsHubImg from '../assets/tools-hub.png';

const ToolsHub = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <img src={toolsHubImg} alt="Tools Hub" className="project-image" />
        <div className="project-content">
          <h1 className="title">Utility Tools Hub</h1>
          <p className="description">
            Utility Tools Hub is a Flutter-based mobile application designed to simplify everyday tasks.
            The app includes tools like a calculator, task manager, and more—all under one roof.
          </p>
          <div className="tech-tags">
            <button>Flutter</button>
            <button>Dart</button>
            <button>Android</button>
          </div>
          <a
            href="https://github.com/YakshGaur/Utility-Tools-Hub"
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
          <h3>Features</h3>
          <ul>
            <li>Designed cross-platform UI using Flutter framework.</li>
            <li>Includes daily utility tools like calculator and to-do manager.</li>
            <li>Currently under testing and refinement stage.</li>
          </ul>
        </div>
        <div className="detail-card">
          <h3>Status</h3>
          <p>Beta testing phase — improvements and new tools are actively being added.</p>
        </div>
      </div>
    </div>
  );
};

export default ToolsHub;