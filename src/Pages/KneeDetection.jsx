import React from 'react';
import './Projects-pages.css';
import kneeImg from '../assets/knee-detection.png'; // ensure this path is correct

const KneeDetection = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <img src={kneeImg} alt="Knee Detection" className="project-image" />
        <div className="project-content">
          <h1 className="title">Knee Osteoarthritis Severity Grading</h1>
          <p className="description">
            A deep learning solution to grade the severity of knee osteoarthritis using medical imaging. The model was trained on a refined and
            augmented dataset to address data imbalance, improving classification accuracy and reliability.
          </p>
          <div className="tech-tags">
            <button>Python</button>
            <button>TensorFlow</button>
            <button>Convolutional Neural Networks</button>
            <button>Keras</button>
            <button>Medical Imaging</button>
            <button>Data Augmentation</button>
          </div>
          <a
            href="https://github.com/YakshGaur/Knee-Osteoarthritis-Severity-Grading-"
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
          <h3>Key Features</h3>
          <ul>
            <li>Initially used imbalanced Kaggle dataset with 5 classes.</li>
            <li>Performed class consolidation and augmentation to balance data.</li>
            <li>Final dataset consists of 3 severity classes and 9800 images.</li>
          </ul>
        </div>
        <div className="detail-card">
          <h3>Status & Usage</h3>
          <p>Currently in the experimental stage. Designed for integration into diagnostic support systems for radiologists and researchers.</p>
        </div>
      </div>
    </div>
  );
};

export default KneeDetection;