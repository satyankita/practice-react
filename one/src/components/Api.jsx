import React, { useEffect, useState } from "react";
import api from "../api";


function Api() {

  const [users, setUsers] = useState([]);

    
  useEffect(() => {

    api.get("/users")
      .then((response) => {
        setUsers(response.data);
      });

  }, []);

  return (
    <div>
    
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
      
    </div>
  );
}

export default Api;