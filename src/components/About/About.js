import React from "react";
import { Container } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

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
  React.useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1500,
    });
  }, []);

  return (
    <section id="about" className="about">
      <Container>
        <span className="head" data-aos="fade-right">
          About
        </span>
        <div className="about-img-skills">
          <div className="about-imgDetail" data-aos="fade-right">
            <img alt="not available" src={Potrait} />
            <span className="about-title">Who am I?</span>
            <p>
              I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have
              serious passion for UI effects, animations and creating intuitive,
              dynamic user experiences. Let's make something special.
            </p>
          </div>
          <div className="about-skills" data-aos="fade-left">
            {skills.map((skill, idx) => {
              return (
                <ProgressBar
                  key={idx}
                  name={skill.name}
                  rating={skill.rating}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
