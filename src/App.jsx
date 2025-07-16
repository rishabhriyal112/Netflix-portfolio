import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import ScrollToHash from './components/Hash/Hash';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/Skills';
import Certifications from './components/Certificates/Certificates';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';

import GreenGuard from './Pages/GreenGuard';
import KneeDetection from './Pages/KneeDetection';
import ToolsHub from './Pages/ToolsHub';
import APIIntegration from './Pages/APIIntegration';

const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Certifications />
    <Connect />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/green-guard" element={<GreenGuard />} />
        <Route path="/projects/knee-detection" element={<KneeDetection />} />
        <Route path="/projects/tools-hub" element={<ToolsHub />} />
        <Route path="/projects/api-integration" element={<APIIntegration />} />
      </Routes>
    </Router>
  );
};

export default App;