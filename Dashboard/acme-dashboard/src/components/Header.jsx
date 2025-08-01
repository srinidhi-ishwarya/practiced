import React from 'react'
import '../styles/header.css'
import { FaRegBell } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

const Header = ({setMobileResponsive}) => {
  return (
    <>
    <div className='container1'>
      <div className='menu1'>
       <div className='heading'> 
       
            <span className='menu'  onClick={()=>setMobileResponsive(true)}><FiMenu /></span>
        
          <span style={{marginLeft:"10px"}}>Leads</span>
          </div>
      </div>
      
   <div className='heading2'>
    <form action="submit">
      <div className='input-icons'>
             <input className='input-field'type="text" placeholder='  Search'  />
            <span className='search-icon'><IoIosSearch /></span> 
             <FaRegBell/>
            <PiStarFourFill/>
      </div>
    </form>
   </div>
   </div>
   <hr />
   </>
  )
}

export default Header