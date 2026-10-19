import axios from "axios";
import React, {useEffect, useState} from "react";


function Axios() {
    const [users, setUsers] = useState([]);

  useEffect(() => 
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
  ),[]}
  
  
    return(
        <>
        <div>
            <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
         ))}
        </div>
        </>
    )

export default Axios;