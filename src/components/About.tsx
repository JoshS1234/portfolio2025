import React from 'react';
import './About.css';
import joshImage from '../Assets/Images/JoshSpence.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software engineer with a love for creating elegant solutions 
              to complex problems. With expertise in modern web technologies, I specialize in 
              building scalable applications that deliver exceptional user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>
          </div>
          <div className="about-image">
            <img src={joshImage} alt="Josh Spence" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

