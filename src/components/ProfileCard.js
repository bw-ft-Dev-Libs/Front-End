import React, { useState } from "react";
import { Card } from "../styles/CardStyles";

const ProfileCard = props => {
  return (
    <div>
      <Card>
        {/* <p>{props.lib.lib}</p> */}
        <p>ProfileCard</p>
        <p>Display Some Data Here</p>
      </Card>

      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default ProfileCard;

//Styling for buttons and a delete confirmation window 
//available in DeleteButtonCode.js deadfile
