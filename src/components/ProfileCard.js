import React, { useState } from "react";
import { Card } from "../styles/CardStyles";

const ProfileCard = props => {
  return (
    <div>
      <Card>
        <p>{props.lib.lib}</p>
      </Card>

      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default ProfileCard;
