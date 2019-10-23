//Profile CREATED BY J.ATWOOD

import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import ProfileCard from "./ProfileCard";
import axiosWithAuth from "../utils/axiosWithAuth";
import { CardCont } from "../styles/CardStyles";

//{id: 5, lib: "another extremely good madlib", user_id: 2, category_id: 3}

export default function Profile(props) {
  // const [profLib, setprofLib] = useState([]);

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/api/devLib`)
  //     .then(res => {
  //       console.log(res.data, "libs!!!");
  //       setprofLib(res.data.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   }, [])

   
  //   const id = localStorage.getItem("user_id")
  //   console.log(profLib);

  return (
    <div>
{/* 
    {profLib.filter(lib => {
      if (id === lib.user_id) {
        setprofLib(lib);
        return (
          <ProfileCard lib={lib}/>
        )
      } else {
        return (
          <h3>There is nothing to show</h3>
        )
        }
    })
    } */}
        <h2>Profile</h2>
        <CardCont>
          <ProfileCard />
        </CardCont>
        <Logout />
    </div>
  );
}
