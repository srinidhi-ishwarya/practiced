import React from "react";

const SummaryCard = ({ title, count, icon }) => {
  return (
    <div className="card1">
      <div className="left">
        <p>{title}</p>
        <b>{count}</b>
      </div>
      <div className="right">
        <span>
          <img src={icon} alt="" width="30px" />
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
