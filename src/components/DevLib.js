import React, { useState } from "react";
import LibCard from "./LibCard";
const DevLib = props => {
  const [users, setUsers] = useState({
    id_user: "",
    id: "",
    lib: "",
    category_id: ""
  });

  useEffect(() => {
    axiosWithAuth()
    .get("/api/devLib");
    .then(res => {
        console.log(res.data)

    })
    .catch(err => {console.log(err);
    });
  }, [])

 

  return (
    <div>
      <h1>A list of Dev Libs</h1>
      {data.map(lib => (
        <LibCard key={lib.id} lib={lib} user_id={lib.user_id} />
      ))}
    </div>
      );
};
export default DevLib;
