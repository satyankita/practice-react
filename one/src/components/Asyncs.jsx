import React, {useEffect, useState} from "react";
import axios from "axios";

function Asyncs() {
      const [users, setUsers] = useState([]);

  const getUsers = async () => {

    try {

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    getUsers();
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
export default Asyncs;