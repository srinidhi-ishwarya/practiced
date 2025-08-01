import React from "react";
import LeadLayout from "./LeadLayout";
import FinalCards from "./FinalCards";

const LeadInfoCard = () => {
  return (
    <div className="content-area">
      {/* Timeline button */}
      <button className="timeline-button">Timeline</button>

      {/* Top info box */}
      <div className="info-box">
        <p><strong>Lead Owner:</strong> Nandha Kumar</p>
        <p><strong>Email:</strong> rohan.mehta@innovix.com</p>
        <p><strong>Phone:</strong> +91 91234 56789</p>
        <p><strong>Mobile:</strong> (555) 867-5309</p>
        <p><strong>Lead Status:</strong> <span className="status-completed">Completed</span></p>
      </div>

      {/* Detailed info box */}
      <div className="info-box">
        <h4>Hide Details</h4>
        <div className="lead-details-grid">
          <div>
            <p><strong>Lead Owner:</strong> Nandhakumar</p>
            <p><strong>Title:</strong> Director of Sales</p>
            <p><strong>Phone:</strong> 555-555-5555</p>
            <p><strong>Mobile:</strong> 555-555-5555</p>
            <p><strong>Lead Source:</strong> Advertisement</p>
            <p><strong>Industry:</strong> Data/Telecom OEM</p>
            <p><strong>Annual Revenue:</strong> $200,000.00</p>
            <p><strong>Email Opt Out:</strong> [-]</p>
            <p><strong>Modified By:</strong> Nandhakumar</p>
            <p>Fri, 7 Apr 2023 11:04 AM</p>
          </div>
          <div>
            <p><strong>Company:</strong> Oh My Goodknits Inc</p>
            <p><strong>Lead Name:</strong> Ms. Carissa Kidman (Sample)</p>
            <p><strong>Email:</strong> carissa-kidman@yahoo.com</p>
            <p><strong>Fax:</strong> [-]</p>
            <p><strong>Website:</strong> http://www.truhlarandtruhlarattys.com</p>
            <p><strong>Lead Status:</strong> Contact in Future</p>
            <p><strong>No. of Employees:</strong> [-]</p>
            <p><strong>Rating:</strong> [-]</p>
            <p><strong>Created By:</strong> Nandhakumar</p>
            <p>Fri, 7 Apr 2023 11:03 AM</p>
            <p><strong>Skype ID:</strong> carissa-kidman</p>
          </div>
        </div>

        {/* Address Information */}
        <div className="section">
          <h5>Address Information</h5>
          <div className="address-grid">
            <div>
              <p><strong>Street:</strong> 5 Boston Ave #88</p>
              <p><strong>State:</strong> SD</p>
              <p><strong>Country:</strong> United States</p>
            </div>
            <div>
              <p><strong>City:</strong> Sioux Falls</p>
              <p><strong>Zip Code:</strong> 57105</p>
            </div>
          </div>
        </div>

        {/* Description Information */}
        <div className="section">
          <h5>Description Information</h5>
          <p><strong>Description:</strong> -</p>
        </div>
      </div>
        <div>
        <FinalCards/>
    </div>
    </div>
  );
};

export default LeadInfoCard;
