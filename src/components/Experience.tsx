import React from 'react';
import './Experience.css';

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
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: [
        'Led development of scalable web applications using React and TypeScript',
        'Collaborated with cross-functional teams to deliver high-quality software',
        'Mentored junior developers and conducted code reviews',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS'],
    },
    {
      title: 'Software Engineer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: [
        'Developed and maintained full-stack applications',
        'Implemented CI/CD pipelines for automated deployments',
        'Optimized application performance and reduced load times by 40%',
      ],
      technologies: ['JavaScript', 'Python', 'Docker', 'Kubernetes'],
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
                    <span key={i} className="tech-tag">{tech}</span>
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

