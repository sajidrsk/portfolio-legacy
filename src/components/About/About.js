import React from "react";

import "./About.scss";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import Potrait from "../../assets/69902898.webp";

const skills = [
  {
    name: "CSS",
    rating: 65,
  },
  {
    name: "HTML",
    rating: 70,
  },
  {
    name: "Javascript",
    rating: 85,
  },
  {
    name: "Python",
    rating: 77,
  },
  {
    name: "React",
    rating: 90,
  },
  {
    name: "C",
    rating: 50,
  },
  {
    name: "C++",
    rating: 60,
  },
];

function About() {
  return (
    <div id="about" className="about">
      <span className="head">About</span>
      <div className="about-img-skills">
        <div className="about-imgDetail">
          <img alt="not available" src={Potrait} />
          <span className="about-title">Who's This Guy</span>
          <p>
            I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have
            serious passion for UI effects, animations and creating intuitive,
            dynamic user experiences. Let's make something special.
          </p>
        </div>
        <div className="about-skills">
          {skills.map((skill, idx) => {
            return (
              <ProgressBar key={idx} name={skill.name} rating={skill.rating} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
