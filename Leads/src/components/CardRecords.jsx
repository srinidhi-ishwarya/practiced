// components/Card.jsx
import React from "react";


const CardRecords = ({ title, buttonLabel, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <strong>{title}</strong>
        {buttonLabel && <button className="card-btn">{buttonLabel}</button>}
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardRecords;
