import React from "react";
import "./About.css";
import joshImage from "../Assets/Images/JoshSpence.jpeg";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I’m a Senior Custom Software Java Developer currently working
              at Accenture. After several years as a Maths teacher, I
              transitioned into software development by completing two intensive
              12-week bootcamps (Northcoders and _nology), where I built a
              strong foundation in Java, JavaScript, TypeScript, SCSS, and
              React. I’m passionate about writing clean, reliable code (with
              good test coverage!) and enjoy combining my problem-solving skills
              with strong communication skills when working with my team.
            </p>
            <p>
              When I'm not coding, I am often out on a run, playing board games
              with friends, reading a book, or working on a side project. My
              current side project is trying to apply machine learning
              algorithms (Neural network and K-nearest neighbours) to predict
              football outcomes. I began this project a few years ago, but have
              revitalised it and I am using it to experiment with new AI tools
              (such as Cursor).
            </p>
            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
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
