import React, { useState } from "react";

const { libState, setLibstate } = useState(DevLib);
const {
  adjective,
  adverb,
  noun1,
  noun2,
  noun3,
  noun4,
  noun5,
  noun6,
  noun7,
  pNoun1,
  pNoun2,
  pNoun3,
  pNoun4,
  pNoun5,
  verb1,
  verb2
} = libState;

const LibCard = props => {
  if (user_id === libState.user_id) {
    return (
      <div>
        <p>{lib.lib}</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>{lib.lib}</p>
      </div>
    );
  }
};

export default LibCard;
