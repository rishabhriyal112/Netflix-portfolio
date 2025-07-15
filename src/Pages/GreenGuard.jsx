import React from 'react';
import './Projects-pages.css';
import greenGuardImg from '../assets/green-guard.png'; // Make sure this image exists

const GreenGuard = () => {
  return (
    <>
      <div className="project-container">
        <div className="project-header">
          <img src={greenGuardImg} alt="Green Guard" className="project-image" />
          <div className="project-content">
            <h1 className="title">Green Guard</h1>
            <p className="description">
              Green Guard is a binary image classification system built using CNN to detect diseases in guava leaves. 
              It was trained on 20,000+ augmented images and achieved 93% accuracy.
            </p>

            <div className="tech-tags">
              <button>Python</button>
              <button>TensorFlow</button>
              <button>CNN</button>
              <button>Streamlit</button>
            </div>

            <a
              href="https://github.com/YakshGaur/Green-Guard-UI"
              target="_blank"
              rel="noopener noreferrer"
              className="join-button"
            >
              View GitHub Repo
            </a>
          </div>
        </div>
      </div>

      <div className="details-section">
        <div className="detail-card">
          <h3>Model & Dataset</h3>
          <ul>
            <li>Combined datasets from Kaggle and Mendeley (3,400 images)</li>
            <li>Augmented to 20,000 images for better robustness</li>
            <li>93% accuracy on test data</li>
          </ul>
        </div>
        <div className="detail-card">
          <h3>Deployment</h3>
          <ul>
            <li>Built a Streamlit web application</li>
            <li>User-friendly and responsive UI</li>
            <li>Targeted toward researchers and farmers</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GreenGuard;
