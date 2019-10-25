import React from "react";
import { Card } from "../styles/CardStyles";

const LibCard = props => {
  console.log("libcard", props);
  return (
    <Card>
      <p>{props.lib.lib}</p>
    </Card>
  );
  //   }
};

export default LibCard;
