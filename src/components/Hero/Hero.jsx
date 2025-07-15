import React from 'react'
import './Hero.css'
import { FaPlay, FaInfoCircle } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-content">
        <h1>Yaksh <span>Gaur</span></h1>
        <h2>Web Developer & ML Engineer</h2>
        <p>
          Final-year B.Tech Computer Science student passionate about building innovative web applications
          and developing cutting-edge machine learning solutions for healthcare and agriculture.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <FaPlay className="icon" /> View Projects
          </a>
          <a href="#about" className="btn btn-secondary">
            <FaInfoCircle className="icon" /> More Info
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero