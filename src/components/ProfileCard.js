import React from "react";

import { Card } from "../styles/CardStyles";
import  SimpleModal  from './Modal'
import axiosWithAuth from "../utils/axiosWithAuth";



const ProfileCard = props => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 const handleDelete = () => {
   console.log(props.lib)
    props.setFetching(true)
    const deleteItem = {
      id: props.lib.id,
      user_id: props.lib.user_id
    }
    console.log('from delete', deleteItem)
    axiosWithAuth()
      .delete('/api/devLib', deleteItem)      
      .then(res=>{
        props.setFetching(false)
        console.log('in axios delete item', deleteItem)
        console.log("delete response", res)
      })
      .catch(err=> console.log('this is from the catch,', deleteItem, err.message))
  }

  return (
    <div>

      <Card>

        <p>{props.lib.lib}</p>
        <button onClick={handleOpen}>Edit</button>
        {open && <SimpleModal handleClose={handleClose} open={open} lib={props.lib} isFetching={props.isFetching} setFetching={props.setFetching} />}
        <button onClick={handleDelete}>Delete</button>

      </Card>


    </div>
  );
};

export default ProfileCard;

//Styling for buttons and a delete confirmation window 
//available in DeleteButtonCode.js deadfile
