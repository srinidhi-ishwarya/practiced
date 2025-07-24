import axios from "axios";
import React, { useEffect, useState } from "react";


const Users = () => {
  const [users, setUsers] = useState([]); // store data
  const [loading, setLoading] = useState(true); // loading status

  useEffect(() => {
    // fetch from fake API
   axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res())
      .then((data) => {
        setUsers(data);       // update state
        setLoading(false);    // stop loading
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
