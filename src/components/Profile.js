//Profile CREATED BY J.ATWOOD

import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import ProfileCard from "./ProfileCard";
import axiosWithAuth from "../utils/axiosWithAuth";
import { CardCont } from "../styles/CardStyles";


export default function Profile() {
  


  const [profLib, setprofLib] = useState();
  const [isFetching, setFetching] = useState(false)
  const id = Number(localStorage.getItem('user_id'))
  
  
  useEffect(()=>{
      axiosWithAuth()
      .get(`/api/devLib/`)
      .then(res => {
        console.log(res.data.data, "libs!!!");
        console.log(res.data.data[0].id)
        setprofLib(res.data.data)        
               
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
    <div>
      {profLib.map(lib => {
        if (lib.user_id === id) {
           return (
             <CardCont key={lib.id}>        
                <ProfileCard lib={lib} isFetching={isFetching} setFetching={setFetching}  />                 
                                    
              </CardCont>
           ) 
        }
             
      })}
             
          
  
  <Logout />    
      
    </div>
  );
}
