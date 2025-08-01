import React from 'react'
import { ChevronDown, Bell } from "lucide-react";
import LeadHeader from './LeaderHeader';
import LeadLayout from './LeadLayout';


const Main = () => {
  return (
    <div>
       <div className="header">
      {/* Search bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      {/* Right section */}
      <div className="header-right">
        {/* Dropdown */}
        <div className="crm-dropdown">
          <span>Traditional CRM</span>
          <ChevronDown size={16} />
        </div>

        {/* Notification bell */}
        <div className="icon">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </div>

        {/* Profile */}
        <div className="profile-circle">N</div>
      </div>
    </div>
    <div className='lead-details'>
         Leads Details 
    </div>
   
    <div>
          <LeadHeader/>
    </div>
    <div>
        <LeadLayout/>
    </div>
   
  

    </div>
  )
}

export default Main