import React from 'react'

const tryit = () => {
    const leadData = [
    {
      value: "Lead Id",
      placeholder: "lead id",
    },
    {
      value: "Lead",
      placeholder: "lead",
    },
    {
      value: "E-Mail",
      placeholder: "e-mail",
    },
    {
      value: "Source",
      placeholder: "source",
    },
    {
      value: "status",
      placeholder: "status",
    },
    {
      value: "Negotiation",
      placeholder: "Negotiation",
    },
  ];
  return (
  <div className="Total">
      <div className="form">
        <div className="head">
            <h2>Add Leads</h2>
            <IoIosClose />
          </div>
        

        <div className="section">

          
            {leadData.map((i) =>(
              <div className="adddata">
                  <input type="text" placeholder={i.placeholder} />
             
              </div>
            ))}
      </div>
      </div>
    </div>
  )
}

export default tryit