import React, { useState } from "react";
import { Card } from "../styles/CardStyles";

const LibCard = props => {
  return (
    <Card>
      <p>{props.lib.lib}</p>
    </Card>
  );
  //   }
};

export default LibCard;
