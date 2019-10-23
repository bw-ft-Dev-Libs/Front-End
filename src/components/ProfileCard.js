import React from "react";

import "../styling/modal.css";

const ProfileCard = props => {
  return (
    <div>
      <p>{props.lib.lib}</p>
    </div>
  );
};

export default ProfileCard;
