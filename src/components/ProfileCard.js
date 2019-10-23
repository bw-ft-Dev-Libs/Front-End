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
    axiosWithAuth()
      .delete('/api/devLib', props.lib)
      .then(res=>{
        props.setFetching(false)
      })
      .catch(err=> console.log(err))
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
