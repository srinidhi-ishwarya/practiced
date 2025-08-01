import React from "react";
import ActionButton from "./ActionButton";

const LeadHeader = () => {
  return (
    <div className="lead-card">
      <div className="lead-info">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <div className="lead-text">
          <h3>
            Thomas Fleming <span className="verified">✔</span>
          </h3>
          <p>Oh My Goodknits Inc</p>
        </div>
      </div>

      <div className="lead-actions">
        <p className="last-contacted">Last contacted on: <strong>24-jan-2025</strong></p>
        <div className="button-group">
          <ActionButton label="Send Email" variant="primary" />
          <ActionButton label="Convert" variant="outline" />
          <ActionButton label="Edit" variant="outline" />
        </div>
      </div>
    </div>
  );
};

export default LeadHeader;
