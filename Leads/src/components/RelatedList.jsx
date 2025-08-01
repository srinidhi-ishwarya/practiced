import React from "react";

const listItems = [
  "Notes",
  "Attachments",
  "Open Activities",
  "Closed Activities",
  "Invited Messages",
  "Emails",
  "Social",
];

const RelatedList = () => {
  return (
    <div className="sidebar">
      <h4 className="sidebar-title">Related Lists</h4>
      <ul className="sidebar-list">
        {listItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            {/* Icons can be added with lucide-react or emoji for now */}
            <span className="icon-placeholder">📄</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedList;
