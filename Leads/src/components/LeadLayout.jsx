import React from "react";
import RelatedList from "./RelatedList";
import LeadInfoCard from "./LeadInfoCard";
import "./../styles/LeadLayout.css";

const LeadLayout = () => {
  return (
    <div className="layout-container">
      <RelatedList />
      <LeadInfoCard />
    </div>
  );
};

export default LeadLayout;
