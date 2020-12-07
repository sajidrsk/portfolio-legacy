import React, { useEffect } from "react";

import "./Navigation.scss";

function Navigation() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        document.querySelector(".navbar").classList.add("sticky");
      } else {
        document.querySelector(".navbar").classList.remove("sticky");
      }
    });
  }, []);

  return (
    <div className="navbar">
      <span className="logo">Logo</span>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
