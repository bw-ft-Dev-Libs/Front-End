//Profile CREATED BY J.ATWOOD

import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import ProfileCard from "./ProfileCard";
import axiosWithAuth from "../utils/axiosWithAuth";
import { CardCont } from "../styles/CardStyles";

export default function Profile(props) {
  const [profLib, setprofLib] = useState([]);

  const handleChanges = e => {
    setprofLib({ ...profLib, [e.target.name]: e.target.value });
  };

  const profile = e => {
    e.preventDefault();
    axiosWithAuth()
      .get(`/api/devLib/${props.user_id}`, profLib)
      .then(res => {
        console.log(res.data, "libs!!!");
        localStorage.getItem("token", res.data.token);
        localStorage.getItem("user_id", res.data.userId);
        props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <CardCont>
        {profLib.map(lib => (
          <ProfileCard key={lib.id} lib={lib} user_id={lib.user_id} />
        ))}
      </CardCont>
      <div>
        <h2>Profile</h2>
        <Logout />
      </div>
    </div>
  );
}
