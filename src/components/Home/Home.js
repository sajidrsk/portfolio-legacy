import React from "react";
import { ArrowDownward as ArrowDownwardIcon } from "@material-ui/icons";
import { Container } from "@material-ui/core";

import "./Home.scss";

function Home() {
  return (
    <header id="home" className="home">
      <Container>
        <h1>
          Hey, I am <span className="home-name">Sajid!</span>
        </h1>
        <p className="home-desc">I'm a software developer.</p>
        <span className="home-work-btn">
          <a href="#projects">
            View My Work
            <ArrowDownwardIcon />
          </a>
        </span>
      </Container>
    </header>
  );
}

export default Home;
