// import React, { useEffect, useState } from "react";


// import "../Styles/table.css"; // You’ll define styles here
// import { Eye, Edit } from "lucide-react"; 
// import axios from "axios";

// const Table = () => {
//   const [data, setData] = useState([]);

//   //useEffect(() => {
//    // const storedData = JSON.parse(localStorage.getItem("formDataList")) || [];
//    // setData(storedData);
//  // }, []);

//  useEffect(() => {
  
//   axios.get('https://fakestoreapi.com/products')
//     .then((response) => {
//       setData(response.data); // This will update the table
//     })
//     .catch((error) => {
//       console.error("Error fetching products:", error);
//     });
// }, []);


//   return (
//     <div className="table-container">
//       <table className="lead-table">
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Lead ID</th>
//             <th>Lead Name</th>
//             <th>Email</th>
//             <th>Source</th>
//             <th>Size</th>
//             <th>Status</th>
//             <th>Interest</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length === 0 ? (
//             <tr>
//               <td colSpan="9">No leads available</td>
//             </tr>
//           ) : (
//             data.map((item, index) => (
//               <tr key={index}>
//                 <td>{String(index + 1).padStart(2, "0")}</td>
//                 <td className="lead-id">L2939{index + 1}</td>
//                 <td>{item.lastName || "Unknown"}</td>
//                 <td>{item.email1}</td>
//                 <td>{item.industry || "LinkedIn"}</td>
//                 <td>{item.revenue || "Large"}</td>
//                 <td>
//                   <span className={`status-badge ${item.status?.toLowerCase()}`}>
//                     {item.status || "Completed"}
//                   </span>
//                 </td>
//                 <td>{item.title || "Product Demo"}</td>
//                 <td className="action-icons">
//                   <Eye size={18} style={{ cursor: "pointer" }} />
//                   <Edit size={18} style={{ cursor: "pointer", marginLeft: "10px" }} />
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;



import React, { useEffect, useState } from "react";
import "../Styles/table.css";
import { Eye, Edit } from "lucide-react";
import axios from "axios"; 

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data)
        setData(response.data,"data"); 
        console.log(response.data.length, "length")
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="table-container">
      <table className="lead-table">
        <thead>
          <tr>
           
            <th> ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>category</th>
            
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="9">Loading leads...</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                {/* <td>{String(index + 1).padStart(2, "0")}</td> */}
                <td className="lead-id">{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                {/* <td>Large</td>
                <td>
                  <span className="status-badge completed">Completed</span>
                </td>
                <td>{item.title.length > 10 ? "Product Demo" : "Pricing Info"}</td>
                <td className="action-icons">
                  <Eye size={18} style={{ cursor: "pointer" }} />
                  <Edit size={18} style={{ cursor: "pointer", marginLeft: "10px" }} />
                </td> */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
