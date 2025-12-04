import React from "react";
import "./Projects.css";
import brewdogImage from "../Assets/Images/BrewDog-Tile.png";
import img2048 from "../Assets/Images/2048.jpeg";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Brewdog beer recommendation website",
      description:
        "A react website that provides information on brewdog beers and can filter based on various parameters, there is also a beer sommelier to recommend beer to go with specific foods (You can use a mock email/password for the login).",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Axios",
        "SCSS",
        "Firebase (Authentication)",
        "Github",
      ],
      github: "https://github.com/JoshS1234/punk-api",
      demo: "https://joshs1234.github.io/punk-api/#/",
      image: brewdogImage,
    },
    {
      title: "2048 Game",
      description:
        "I created this browser-based game fairly early in _nology bootcamp to practice TypeScript, SCSS, and HTML.",
      technologies: ["HTML", "TypeScript", "SCSS", "Github"],
      github: "https://github.com/JoshS1234/game2048",
      demo: "https://joshs1234.github.io/game2048/index.html",
      image: img2048,
    },
    {
      title: "Java poker game simulator",
      description:
        "This was a pair project that I completed during the _nology bootcamp. It runs in the command line and simulates 2 games (Poker and Snap). I wrote the code for Poker, and my teammate wrote the code for Snap.",
      technologies: ["Java", "Pair-programming", "Github"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <span>Project Image</span>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
