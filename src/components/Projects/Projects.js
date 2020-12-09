import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Projects.scss";
import Card from "../UI/Card/Card";
import Container from "../UI/Container/Container";
import githubProjectIMG from "../../assets/github-finder.JPG";
import recipeProjectIMG from "../../assets/recipe-app.PNG";
import bitcoinProjectIMG from "../../assets/bitcoin-monitor.JPG";

const projectData = [
  {
    id: 1,
    name: "Kitchen Recipe App",
    tech: ["html", "css", "javascript", "react"],
    demoURL: "https://sajid-kitchen-recipe.netlify.app/",
    imgURL: recipeProjectIMG,
    desc: "Create Your Own Kitchen Recipe and Store On Local Storage",
  },
  {
    id: 2,
    name: "Github Profile Finder",
    tech: ["html", "css", "javascript", "react"],
    demoURL: "https://sajid-react-githubapi.netlify.app/",
    imgURL: githubProjectIMG,
    desc: "Find and View Github Reposotories",
  },
  {
    id: 3,
    name: "Bitcoin Monitor App",
    tech: ["react", "material-ui"],
    demoURL: "https://sajid-react-bitcoin.netlify.app/",
    imgURL: bitcoinProjectIMG,
    desc: "Monitor bitcoin prices in USD, GBP and EUR",
  },
  {
    id: 4,
    name: "To-Do App",
    tech: ["html", "css", "javascript"],
    demoURL: "https://google.co.in",
    imgURL:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    desc: "Create and Manage Your task with To-Do list",
  },
  {
    id: 5,
    name: "Burger Builder",
    tech: ["html", "css", "javascript", "react"],
    demoURL: "https://google.co.in",
    imgURL:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    desc: "Build Burger and Order Now",
  },
  {
    id: 6,
    name: "Notes App",
    tech: ["html", "css", "javascript"],
    demoURL: "https://google.co.in",
    imgURL:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    desc: "Take Notes and Never Forget anything",
  },
  {
    id: 7,
    name: "Newsgrid",
    tech: ["html", "css"],
    demoURL: "https://google.co.in",
    imgURL:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    desc: "Find Latest News and Stay up to date with This fast paced world",
  },
  {
    id: 8,
    name: "Portfolio Website",
    tech: ["html", "css"],
    demoURL: "https://google.co.in",
    imgURL:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    desc: "Portfolio website for graphics designers & Professional Shooters",
  },
  {
    id: 9,
    name: "Edge Ledger Website",
    tech: ["html", "css"],
    demoURL: "https://google.co.in",
    imgURL:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    desc: "Hoter Website for Your Business",
  },
];

function Portfolio() {
  const [projects, setProjects] = useState(projectData);
  // const [projectStyle, setProjectStyle] = useState();

  React.useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 150,
    });
  }, []);

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
            <button onClick={() => projectFilter("all")} data-aos="fade-right">
              All
            </button>
            <button onClick={() => projectFilter("html")} data-aos="fade-right">
              HTML/CSS
            </button>
            <button
              onClick={() => projectFilter("javascript")}
              data-aos="fade-left"
            >
              Javascript
            </button>
            <button onClick={() => projectFilter("react")} data-aos="fade-left">
              React
            </button>
          </div>
          <div className="projects-cards-group">
            {projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
