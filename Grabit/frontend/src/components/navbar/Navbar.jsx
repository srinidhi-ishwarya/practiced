import React from 'react'
import "./navbar.css"
import { IoIosMenu } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
   <>
   <div class ="navbar">
    <div class="nav_phone">
       
           <p><span><MdOutlinePhoneInTalk/></span> 9876543210</p>
           <p><span><FaWhatsapp /></span>9876544321</p>
     

    </div>
    <div className="nav_para">
         <p>World's Fastest Online Shopping Destination</p>
    </div>

    <div className="nav_list">
        <ul>
        <li> <Link to="/help">Help?</Link></li>
        <li> <Link to="/about">About</Link></li>
           
            {/* <li> <a href="">Track Order?</a></li> */}
            <li> <a href="">English </a><span ><RiArrowDropDownLine /></span></li>
            <li> <a href="">Dollar </a><span><RiArrowDropDownLine /></span></li>
        </ul>
        
    </div>
    <div className="menu_bar">
            <IoIosMenu />
    </div>
       
   </div>
   
   </>
  )
}

export default Navbar