import React, { useState } from "react";

import "./Portfolio.scss";

const projectData = [
  {
    id: 1,
    name: "project 1",
    tech: ["html", "css", "javascript", "react"],
  },
  {
    id: 2,
    name: "project 2",
    tech: ["html", "css", "javascript"],
  },
  {
    id: 3,
    name: "project 3",
    tech: ["html", "css"],
  },
  {
    id: 4,
    name: "project 4",
    tech: ["html", "css", "javascript", "react"],
  },
];

function Portfolio() {
  const [projects, setProjects] = useState(projectData);

  const projectFilter = (type) => {
    if (type === "all") {
      setProjects(projectData);
    } else {
      const updatedProjects = projectData.filter((project) =>
        project.tech.includes(type)
      );
      setProjects(updatedProjects);
    }
  };

  return (
    <div id="portfolio" className="portfolio">
      <span className="head">Projects</span>
      <div className="projects">
        <div className="projects-btn">
          <button onClick={() => projectFilter("all")}>All</button>
          <button onClick={() => projectFilter("html")}>html & css</button>
          <button onClick={() => projectFilter("javascript")}>
            javascript
          </button>
          <button onClick={() => projectFilter("react")}>React</button>
        </div>
        <div className="projects-cards-group">
          {projects.map((project, idx) => (
            <div key={project.id} className="project-card">
              {project.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
