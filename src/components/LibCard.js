import React, { useState } from "react";

const LibCard = props => {
  //   if (user_id === props.user_id) {
  //     return (
  //       <div>
  //         <p>{props.lib.lib}</p>
  //         <button>Edit</button>
  //         <button>Delete</button>
  //       </div>
  //     );
  //   } else {
  return (
    <div>
      <p>{props.lib.lib}</p>
    </div>
  );
  //   }
};

export default LibCard;
