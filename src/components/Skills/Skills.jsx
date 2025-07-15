import React from 'react';
import './Skills.css';

const skillsData = [
  {
    title: 'Programming Languages',
    items: ['HTML', 'CSS', 'JavaScript', 'Dart', 'Python'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['TensorFlow', 'Keras', 'Flutter', 'React.js', 'Streamlit'],
  },
  {
    title: 'Development Tools',
    items: ['VS Code', 'Android Studio', 'Git', 'Google Colab'],
  },
  {
    title: 'Soft Skills',
    items: ['Team Collaboration', 'Communication', 'Documentation', 'Problem Solving'],
  },
];

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h2 className="skills-title">Skills & Expertise</h2>
      <p className="skills-subtitle">Technologies and tools I use to bring ideas to life</p>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div className="skills-card" key={index}>
            <h3 className="card-title">⚡ {category.title}</h3>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>⭐ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
