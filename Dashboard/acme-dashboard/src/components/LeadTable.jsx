import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import "../styles/leadtable.css"
import { CiSearch } from "react-icons/ci";
import { GrFilter } from "react-icons/gr";
import Sidebar from './MobileSideBar';



const LeadTable = () => {
  const data =[
    {
      leadid:"L-123",
      lead:"John Watkins",
      email:"john@tech.corp",
      source:"Organic",
      status:"negotiation",
      size:"$1,250"
    },
      {
      leadid:"L-124",
      lead:"Michael Scott",
      email:"Michael@tech.corp",
      source:"Organic",
      status:"pre-sale",
      size:"$2,750"
    },
      {
      leadid:"L-125",
      lead:"Hoppins J",
      email:"jhoppins@tech.corp",
      source:"summer2",
      status:"closed",
      size:"$1,100"
    }
  ]
  return (
    <>
    <div className='header'>
   
      <div className='left2'>
        <div><span>View:</span>
       <span className="box"> 
        <span className="icon">
          <TfiMenuAlt />
          </span><span className="view">List</span>
          </span>
        </div>
         </div>
        <div className='right'>
        <form action="submit"className='search'>
            <input type="text" className="input-field"placeholder='  Search'/>
           <span ><CiSearch /></span>
        </form>
        <div style={{display: "flex", alignItems: "center"}}>
          <div className='filter-icon'><GrFilter /></div>
         <div className="filter">Filter</div>
        </div>
      
        </div>
    </div>
    <div className="container">
       <table>
        <thead>
          <tr>
            <th>Lead ID</th>
            <th>Lead</th>
            <th>Email</th>
            <th>source</th>
            <th>statussize</th>
            <th>Interest</th>
          </tr>
        </thead>
          <tbody>
            {
              data.map(i => <tr>
                <td>{i.leadid}</td>
                <td>{i.lead}</td>
                <td>{i.email}</td>
                <td>{i.source}</td>
                <td>
                  <span className={`status-badge ${i.status.toLowerCase().replace(/\s/g, '-')}`}>
                  {i.status}
                  </span>
                  </td>
                <td>{i.size}</td>
              </tr>

              )
            }

          </tbody>


       </table>
    </div>
    </>
  )
}

export default LeadTable