import React from "react";

import "./Card.scss";

function Card(props) {
  const { project } = props;
  console.log(typeof project.imgUrl);

  const cards = (
    <div class="flip" style={{ color: "black" }}>
      <div
        class="front"
        style={{
          backgroundImage: `url(${project.imgUrl.replace(/^"(.*)"$/, "$1")})`,
        }}
      >
        <h1 class="text-shadow">{project.name}</h1>
      </div>
      <div class="back">
        <h2>{project.tech.join(", ")}</h2>
        <p>{project.desc}</p>
      </div>
    </div>
  );
  return (
    <div className="project-card">
      {/* <img
        alt=""
        src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      />
      <div className="project-name">{project.name}</div>
      <a href={`${project.demo}`} target="_blank">
        Demo
      </a> */}
      {cards}
    </div>
  );
}

export default Card;
