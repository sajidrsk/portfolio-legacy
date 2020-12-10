import React from "react";
import { Link } from "react-scroll";

import "./Home.scss";
import Container from "../UI/Container/Container";

function Home() {
  return (
    <header id="home" className="home">
      <Container>
        <h1>
          Hey, I am <span className="home-name">Sajid!</span>
        </h1>
        <p className="home-desc">I'm a software developer.</p>
        <span className="home-work-btn">
          <Link to="projects" smooth>
            View My Work
          </Link>
        </span>
      </Container>
    </header>
  );
}

export default Home;
