import React from 'react'
import "../styles/leadsummary.css"
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import percent from "../assets/percent.png"
import { FiPlus } from "react-icons/fi";
import SummaryCard from './SummaryCard';
// import { DATA } from '../javascript/LeadSummaryData';

const LeadSummary = (
  {
    title,
    companyName,
    daysInactive,
    scoreDrop,
    newLeads,
    lastLead,
    closeLead,
    headingAllLead,
    textAllLead,
    setLeadData
  },
 
) => {

 
  const cardData = [
    {
      title:"New Leads", 
      count:newLeads,
      icon:percent ,
      className:"card1" 
    },
    {
       title:"Last",
       count:lastLead, 
       className:"card2" 
    },
    {
      title:"Total Closed",
      count:closeLead ,
      icon:percent ,
      className:"card3" 

    }
   
  ]
  
  return (
    <>
    <div className='insight'>
      <div className='fst-line'>
        <p>{title} <span><PiStarFourFill /></span></p>
        <i></i>
        <i2>Engage <span ><FaArrowRightLong /></span></i2>
        </div>

        <p className='para'>No activity for <b> {companyName} </b>in {daysInactive} days - engagement score dropped <b>{scoreDrop}</b>%.</p>
    
    </div>
   <div className="cards">
  
     {
      cardData.map((i)=>{
        return(
          <SummaryCard 
              title={i.title}
              count={i.count}
              icon={i.icon}
              className='card1'
          />

        )
      }
      )
     }
</div>
    <div className='lead'>
      <div className='lead2'>
      <h4>{headingAllLead}</h4>
      <p>{textAllLead}</p>
      </div>
      <div className='lead3'>
      <button onClick={()=>setLeadData(true)}> <span><FiPlus /></span>Add Lead</button>
      </div>
    </div>
         <hr />
    
      </>
  )
}

export default LeadSummary