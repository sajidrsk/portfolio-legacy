import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./ProgressBar.scss";

function ProgressBar(props) {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="progress">
      <div className="progressname">{props.name}</div>
      <div className="progressbar">
        <div data-aos="fade-right" style={{ width: `${props.rating}%` }}>
          {`${props.rating}%`}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
