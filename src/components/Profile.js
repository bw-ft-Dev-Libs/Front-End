//Profile CREATED BY J.ATWOOD

import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import ProfileCard from "./ProfileCard";
import axiosWithAuth from "../utils/axiosWithAuth";
import { CardCont} from "../styles/CardStyles";
import { ButtonFun } from "./Buttons";



export default function Profile() {
  


  const [profLib, setprofLib] = useState();

  const [isFetching, setFetching] = useState(false)
  const id = Number(localStorage.getItem('user_id'))
  console.log(id)
  
  useEffect(()=>{
      axiosWithAuth()
      .get(`/api/devLib/`)
      .then(res => {        
        console.log('from useeffect', res.data)
        setprofLib(res.data.data);
      })
      .catch(err => {
        console.log(err);

      });  
  }, [isFetching]) 

  
 
  if (!profLib){
    return <h1>Loading..</h1>
  }
  else if (profLib.length === 0) {
    return (
      <h2>You haven't created any Dev-Libs!</h2>
    )

  }


  return (
    <CardCont>
      {profLib.map(lib => {
        if (lib.user_id === id) {
           return (
             <CardCont key={lib.id}>        
                <ProfileCard lib={lib} isFetching={isFetching} setFetching={setFetching}  />                         
              </CardCont>
           ) 
        }
      })}
      <ButtonFun />
      <Logout />

    </CardCont>

  );
}
