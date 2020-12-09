import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Navigation.scss";

function Navigation() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight + 47) {
        document.querySelector(".navbar").classList.add("sticky");
        document.querySelector(".navbar").classList.add("fadeInDown");
      } else if (window.scrollY > window.innerHeight) {
        // Do Nothing
      } else {
        document.querySelector(".navbar").classList.remove("fadeInDown");
        document.querySelector(".navbar").classList.remove("sticky");
      }
    });
  }, []);

  return (
    <div className="navbar">
      <span className="logo" onClick={() => scroll.scrollToTop()}>
        Logo
      </span>
      <div>
        <Link activeClass="active" to="home" smooth spy>
          Home
        </Link>

        <Link activeClass="active" to="about" smooth spy>
          About
        </Link>

        <Link activeClass="active" to="projects" smooth spy>
          Portfolio
        </Link>

        <Link activeClass="active" to="contact" smooth spy>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
