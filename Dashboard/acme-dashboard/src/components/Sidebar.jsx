import React from 'react'
import '../styles/sidebar.css';
import { RxDashboard } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlinePersonSearch } from "react-icons/md";
import { BiRadio } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdPaper } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";
import { PiCirclesThreePlus } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import log from "../assets/log.png"


const Sidebar = () => {
  return (
    <div className="side_bar">
        <div className="side_bar2">
        <div className='logo'> 
          <img src={log} alt="" /><h2>Acme Corp</h2>
        </div>
    
        <div className="side_lists">
            <ul>
               <li> <span className="icon"><RxDashboard /></span>Dashboard</li>
                <li><span className="icon"><FaTasks /></span>My Tasks</li>
                <li><span className="icon"><CiCalendar /></span>Meetings</li>
                </ul>
                <div className="side_line1"></div>
              
                </div>
            <div className="side_label">
            sales
           </div>
        <div className="side_lists">
             

            <ul>
          <li><span className="icon"><MdOutlinePersonSearch /></span>Leads</li>
          <li><span className="icon"><HiOutlineBuildingOffice2 /></span>Accounts</li>
          <li><span className="icon"><BiRadio /></span>Deals</li>
          <li><span className="icon"><IoMdContact /></span>Contact</li>
          <li><span className="icon"><IoCallOutline /></span>Calls</li>
          <li><span className="icon"><PiCirclesThreePlus /></span>Workflows</li>
          </ul>
        </div>
        <div className="side_line">

        </div>
       <div className="side_label">marketing</div>
      <div className="side_lists">
      
        <ul>
          <li><span className="icon"><HiOutlineSpeakerphone /></span>Campaign</li>
          <li><span className="icon"><GoLightBulb /></span>Opportunities</li>
          <li><span className="icon"><IoMdPaper /></span>Documents</li>
        </ul>
      </div>
        <div className="side_line">
            
        </div>
      <div className="side_lists">
        <ul>
          <li><span className="icon"><IoSettingsOutline /></span>Settings</li>
          <li><span className="icon"><FaRegCircleQuestion /></span>Help & Support</li>
      </ul>
      </div>
       <div className="profile_box">
                My profile
        </div>

    </div>
    </div>
  )
}

export default Sidebar