import React from "react";
import "./Skills.css";

interface Skill {
  name: string;
  rating: number; // 1-5 stars
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "Java", rating: 5, category: "Language" },
    { name: "JavaScript", rating: 5, category: "Language" },
    { name: "TypeScript", rating: 4, category: "Language" },
    { name: "Python", rating: 4, category: "Language" },
    { name: "React", rating: 5, category: "Frontend" },
    { name: "CSS/SCSS", rating: 4, category: "Frontend" },
    { name: "HTML", rating: 3, category: "Frontend" },
    { name: "SQL", rating: 3, category: "Databases" },
    { name: "Docker", rating: 3, category: "DevOps" },
    { name: "Jenkins", rating: 2, category: "DevOps" },
    { name: "Kibana", rating: 4, category: "DevOps" },
    { name: "Grafana", rating: 2, category: "DevOps" },
    { name: "Git", rating: 5, category: "Tools" },
    { name: "Firebase", rating: 3, category: "Tools" },
  ];

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          {categories.map((category) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skills-grid">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-stars">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={index}
                            className={`star ${
                              index < skill.rating ? "filled" : "empty"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
