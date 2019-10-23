import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import LibCard from "./LibCard";
const DevLib = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/devLib")
      .then(res => {
        console.log(res.data);
        setUsers(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>A list of Dev Libs</h1>
      {users.map(lib => (
        <LibCard key={lib.id} lib={lib} user_id={lib.user_id} />
      ))}
    </div>
  );
};
export default DevLib;
