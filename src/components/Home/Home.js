import React from "react";
import { ArrowDownward as ArrowDownwardIcon } from "@material-ui/icons";

import "./Home.scss";

function Home() {
  return (
    <div id="home" className="home">
      <h1>
        Hey, I am <span className="home-name">Sajid!</span>
      </h1>
      <p className="home-desc">I'm a software developer.</p>
      <span className="home-work-btn">
        <a href="#portfolio">
          View My Work
          <ArrowDownwardIcon />
        </a>
      </span>
    </div>
  );
}

export default Home;
