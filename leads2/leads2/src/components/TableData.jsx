import { useEffect, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TableData = () => {
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleGetLeads();
  }, []);

  const handleGetLeads = () => {
    try {
      const leadsData = localStorage.getItem("lead");
      if (leadsData) {
        setLeads(JSON.parse(leadsData));
      } else {
        setLeads([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
  const isConfirmed = window.confirm("Are you sure you want to delete this lead?");
  if (isConfirmed) {
    const filteredLeads = leads.filter((lead) => lead.id !== id);
    setLeads(filteredLeads);
    localStorage.setItem("lead", JSON.stringify(filteredLeads));
  }
};

const handleEdit = (id) => {
  navigate(`/form/${id}`);
};

  return (
    <>
      {leads.length === 0 ? (
        <p style={{ textAlign: "center" }}>No data found</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Company Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>NO of Employees</th>
                <th>Ratings</th>
                <th>Lead Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.company}</td>
                  <td>{lead.email}</td>
                  <td>{lead.website}</td>
                  <td style={{ textAlign: "center" }}>{lead.employees}</td>
                  <td style={{ textAlign: "center" }}>{lead.rating}</td>
                  <td>{lead.score}</td>
                  <td style={{ textAlign: "center" }}>
                    <FiEdit3 size={16} style={{ marginLeft: "10px", cursor: "pointer" }} onClick={() => handleEdit(lead.id)}/>
                    <MdDelete
                      size={16}
                      style={{ marginLeft: "10px", cursor: "pointer" }}
                      onClick={() => handleDelete(lead.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TableData;
