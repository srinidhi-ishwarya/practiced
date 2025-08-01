import React, { useState } from 'react';
import LeadSummary from './LeadSummary';
import Header from './Header';
import LeadTable from './LeadTable';
import "../styles/main.css";
import leadSummaryData from "../javascript/LeadSummaryData"; 
import Sidebar from './MobileSideBar';
import AddLead from './AddLead';
const Main = () => {

  const [mobileResponsive,setMobileResponsive] = useState(false)
  const[addLead,setLeadData]=useState(false)

  return (
    <div className='main'>
      <Header setMobileResponsive={setMobileResponsive} />
      {
        mobileResponsive && (
          <>
          <div className='backdrop'>
            </div>
          <Sidebar setMobileResponsive={setMobileResponsive} />
          </>
        )
      }
      <LeadSummary {...leadSummaryData}
      setLeadData={setLeadData} />
      {
        addLead &&(
           <AddLead setLeadData={setLeadData}/>
        )
      }
      <LeadTable />
    </div>
  );
};

export default Main;
