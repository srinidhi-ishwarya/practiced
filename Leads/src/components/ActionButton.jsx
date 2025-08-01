import React from "react";


const ActionButton = ({ label, variant }) => {
  return (
    <button className={`action-button ${variant}`}>
      {label}
    </button>
  );
};

export default ActionButton;

