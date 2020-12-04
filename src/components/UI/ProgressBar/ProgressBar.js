import React from "react";

import "./ProgressBar.scss";

function ProgressBar(props) {
  return (
    <div className="progress">
      <div className="progressname">{props.name}</div>
      <div className="progressbar">
        <div style={{ width: `${props.rating}%` }}>{`${props.rating}%`}</div>
      </div>
    </div>
  );
}

export default ProgressBar;
