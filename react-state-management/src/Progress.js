import React from "react";

let Progress = ({ width }) => {
  return (
    <div className="progress-container">
      <div className="progress-indicator" style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default Progress;
