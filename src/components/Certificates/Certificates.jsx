import React from 'react';
import './Certificate.css';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  {
    title: 'Complete Web Designing Course',
    platform: 'Udemy',
    topics: 'HTML5, CSS3, Responsive Design, UI/UX',
  },
  {
    title: 'Python For Beginners',
    platform: 'Udemy',
    topics: 'NumPy, Pandas, Python Programming',
  },
];

const Certifications = () => {
  return (
    <div className="certifications-section">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-icon">
              <FaCertificate />
            </div>
            <div className="cert-content">
              <h3 className="cert-name">{cert.title}</h3>
              <p className="cert-details">{cert.platform} - {cert.topics}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;