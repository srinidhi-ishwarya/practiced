import React from "react";
import { IoMdClose } from "react-icons/io";
import "../styles/addLead.css";
const AddLead = ({ setLeadData }) => {
  const logindata = [
    {
      labels: "Lead ID",
      placeholders: "ID",
    },
    {
      labels: "Lead Name",
      placeholders: "Name",
    },
    {
      labels: "Lead Email",
      placeholders: "Email",
    },
    {
      labels: "Value",
      placeholders: "Lead Values",
    },
    {
      labels: "Lead Actions",
      placeholders: "Actions",
    },
  ];
  return (
    <div className="cointainer">
      <div className="semi-cointainer">
        <div className="login-header">
          <h2>Add Leads</h2>
          <span onClick={() => setLeadData(false)}>
            <IoMdClose />
          </span>
        </div>

        <div className="section">
          {logindata.map((each) => (
            <div className="elements">
              <form action="">
                <label id="l1">{each.labels}</label>
              </form>
              <form action="">
                <input type="text" placeholder={each.placeholders} id="ip1" />
              </form>
            </div>
          ))}
        </div>

        <div className="select">
          <form action="">
            <label>Status</label>
          </form>
          <form action="">
            <select className="check_box">
              <option>New</option>
              <option>Negotiation</option>
              <option>Closed</option>
            </select>
          </form>
        </div>

        <div className="login-footer">
          <button className="button2">Add Lead</button>
        </div>
      </div>
    </div>
  );
};

export default AddLead;

