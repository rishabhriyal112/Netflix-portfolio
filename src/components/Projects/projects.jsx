import React from 'react';
import './Projects.css';
import { FaPlay } from 'react-icons/fa';

import greenGuardImg from '../../assets/green-guard.png';
import kneeImg from '../../assets/knee-detection.png';
import toolsHubImg from '../../assets/tools-hub.png';
import apiProjectImg from '../../assets/api-integration.png';

const projects = [
  {
    title: 'Live API Integration',
    image: apiProjectImg,
    link: '/projects/api-integration',
    status: 'Live Project',
  },
  {
    title: 'Green Guard',
    image: greenGuardImg,
    link: '/projects/green-guard',
    status: 'Completed',
  },
  {
    title: 'Knee Detection',
    image: kneeImg,
    link: '/projects/knee-detection',
    status: 'On Going',
  },
  {
    title: 'Utility ToolsHub',
    image: toolsHubImg,
    link: '/projects/tools-hub',
    status: 'Testing',
  },
];

const Projects = () => {
  return (
    <div className="projects-section-wrapper" id="projects">
  <h2 className="section-title">My Projects</h2>
      <div className="carousel">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => window.location.href = project.link}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="overlay">
              <div className="status-label">{project.status}</div>
              <button className="view-more">
                <FaPlay className="play-icon" />
                View Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
