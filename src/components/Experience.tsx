import React from "react";
import "./Experience.css";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Custom Software Java Developer",
      company: "Tech Company",
      period: "2026 - Present",
      description: [
        "Using Java 11 and Spring to maintain the self-assessment tax website",
        "Monitoring microservices with Kibana, Grafana and PagerDuty",
        "Completing proof of concepts for new functionality, and documenting the process",
        "Conducting code reviews and provinding guidance to new team members",
      ],
      technologies: [
        "Java",
        "Spring",
        "Kibana",
        "Grafana",
        "PagerDuty",
        "Docker",
        "Git",
        "Confluence",
        "HTML",
      ],
    },
    {
      title: "Java Developer",
      company: "_Nology (Client placement: Accenture)",
      period: "2024 - 2026",
      description: [
        "Completed the 12 week _Nology bootcamp, learning TypeScript, Java and React",
        "Completed a further 4 week Scala upskilling crash-course",
        "Managed a client project during training, which involved me leading the team and conducting code reviews",
        "Completed full-stack individual projects in a short timeframe",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "Java",
        "Scala",
        "Firebase",
        "Git",
        "SCSS",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="experience-period">{exp.period}</span>
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="experience-technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
