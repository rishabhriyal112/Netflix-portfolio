import React from 'react'
import './About.css'
import { FaCode, FaBrain, FaBullseye, FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-left'>
        <h1>About Me</h1>
        <p>
          As a final-year B.Tech Computer Science student at Swami Rama Himalayan University, 
          I'm passionate about the intersection of web development and machine learning. 
          My journey has been driven by curiosity and a desire to create solutions that make a real impact.
        </p>
        <p>
          Currently interning at CareHive Pvt Ltd, I'm gaining hands-on experience in system architecture and API design. 
          I love building user-friendly web applications and developing deep learning models that can solve 
          real-world problems in healthcare and agriculture.
        </p>

        <div className='education'>
          <FaGraduationCap className='icon' />
          <span>B.Tech CSE • Swami Rama Himalayan University</span>
        </div>

        <a href="#connect" className="about-btn">Get In Touch</a>
      </div>

      <div className='about-right'>
        <div className='card'>
          <FaCode className='card-icon' />
          <div>
            <h3>Web Development</h3>
            <p>Building responsive, user-friendly applications</p>
          </div>
        </div>

        <div className='card'>
          <FaBrain className='card-icon' />
          <div>
            <h3>Machine Learning</h3>
            <p>Developing AI solutions for healthcare & agriculture</p>
          </div>
        </div>

        <div className='card'>
          <FaBullseye className='card-icon' />
          <div>
            <h3>Problem Solving</h3>
            <p>Creating innovative solutions for real-world challenges</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About