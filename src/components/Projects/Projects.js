import React, { useState } from "react";
import { Container } from "@material-ui/core";

import "./Projects.scss";

const projectData = [
  {
    id: 1,
    name: "Kitchen Recipe App",
    tech: ["html", "css", "javascript", "react"],
    demo: "https://sajid-kitchen-recipe.netlify.app/",
  },
  {
    id: 2,
    name: "Github Profile Finder",
    tech: ["html", "css", "javascript", "react"],
    demo: "https://sajid-react-githubapi.netlify.app/",
  },
  {
    id: 3,
    name: "Bitcoin Monitor App",
    tech: ["react", "material-ui"],
    demo: "https://sajid-react-bitcoin.netlify.app/",
  },
  {
    id: 4,
    name: "To-Do App",
    tech: ["html", "css", "javascript"],
    demo: "https://google.co.in",
  },
  {
    id: 5,
    name: "Burger Builder",
    tech: ["html", "css", "javascript", "react"],
    demo: "https://google.co.in",
  },
  {
    id: 6,
    name: "Notes App",
    tech: ["html", "css", "javascript"],
    demo: "https://google.co.in",
  },
  {
    id: 7,
    name: "Newsgrid",
    tech: ["html", "css"],
    demo: "https://google.co.in",
  },
  {
    id: 8,
    name: "Portfolio Website",
    tech: ["html", "css"],
    demo: "https://google.co.in",
  },
  {
    id: 9,
    name: "Edge Ledger Website",
    tech: ["html", "css"],
    demo: "https://google.co.in",
  },
];

function Portfolio() {
  const [projects, setProjects] = useState(projectData);
  // const [projectStyle, setProjectStyle] = useState();

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
    <section id="projects" className="project-div">
      <Container>
        <span className="head">Projects</span>
        <div className="projects">
          <div className="projects-btn">
            <button onClick={() => projectFilter("all")}>All</button>
            <button onClick={() => projectFilter("html")}>HTML/CSS</button>
            <button onClick={() => projectFilter("javascript")}>
              Javascript
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
      </Container>
    </section>
  );
}

export default Portfolio;
