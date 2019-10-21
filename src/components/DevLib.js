import React, { useState } from "react";
import LibCard from "./LibCard";
const DevLib = props => {
  const [users, setUsers] = useState({
    id_user: "1, 2",
    id: "",
    lib: "",
    category_id: ""
  });

  const [libState, setLibstate] = useState({
    adjective: "green",
    adverb: "greenly",
    noun1: "man",
    noun2: "woman",
    noun3: "child",
    noun4: "pet",
    noun5: "monster",
    noun6: "boy",
    noun7: "girl",
    pNoun1: "Bob",
    pNoun2: "Jane",
    pNoun3: "George",
    pNoun4: "Mary",
    pNoun5: "Mike",
    verb1: "run",
    verb2: "jump"
  });

  const data = [
    {
      id: 1,
      lib: `If you want to become ${libState.noun1}.literate, here are some key
${libState.pNoun1}.that you should ${libState.verb1}.as quickly as possible:

CD ROM: Stands for compact ${libState.noun2}... read only
${libState.noun7}. This compact disc can hold as many as 600,
${libState.pNoun2}, which is the equivalent of 700 floppy ${libState.pNoun3}.

CYBERSPACE: Stands for the imaginary ${libState.noun3}.that people,
enter when they ${libState.verb2}.with each other through computers on
a collection of ${libState.pNoun4}, known as the Inter${libState.noun4}.

E-Mail: Means ${libState.adverb}.transmitted ${libState.noun5}.

MODEM: Is the device that allows a ${libState.adjective}.computer to
transmit ${libState.pNoun5}.over a phone ${libState.noun6}.`,
      user_id: 1,
      category_id: 1
    },
    {
      id: 13,
      lib: `This is a dev lib This is a dev lib ${libState.noun1}. This is a dev lib This is a ${libState.pNoun1} lib This is a dev lib This is a ${libState.verb1} lib This is a ${libState.noun2} lib This is a ${libState.noun7} lib This is a  lib This is a dev lib This is a dev lib This is a dev ${libState.pNoun2} This is a dev ${libState.pNoun3} This is a dev lib This is a dev lib This is a dev lib This is a ${libState.noun3} lib This is a dev ${libState.verb2} This is a ${libState.noun5} lib This is a dev lib This is a dev${libState.noun4} lib This is a dev lib ${libState.pNoun4} is a dev lib This is a dev lib This is a dev lib This is a dev ${libState.adverb} This is ${libState.adjective} dev lib ${libState.pNoun5} is a dev lib This is ${libState.noun6} dev lib.`,
      user_id: 2,
      category_id: 3
    },
    {
      id: 3,
      lib: `hodorhodor ${libState.noun1} hoddddoooorr hodorhodor ${libState.pNoun1} hoddddoooorr hodorhodor ${libState.verb1} hoddddoooorr ${libState.noun2} hodor ${libState.noun7} hodorhodor hodor hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor ${libState.pNoun2} hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor ${libState.pNoun3} hodorhodor ${libState.noun5} hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor ${libState.verb2} hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor ${libState.noun4} hodorhodor hodor ${libState.pNoun4} hodorhodor hodor hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor ${libState.adverb} hoddddoooorr hodorhodor ${libState.adjective} hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor hoddddoooorr ${libState.pNoun5} hodor hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor hoddddoooorr ${libState.noun6} hodor hoddddoooorr `,
      user_id: 2,
      category_id: 3
    },
    {
      id: 9,
      lib: `${libState.noun1} dirigible plums, ${libState.pNoun1} Krum hexed memory ${libState.verb1} Animagus ${libState.noun2} Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! ${libState.noun2} venom Umbridge swiveling ${libState.verb1} eye Levicorpus, nitwit ${libState.noun7} oddment ${libState.pNoun2}. Chasers ${libState.pNoun3} quills The Boy Who Lived bat spleens cupboard under the stairs flying ${libState.noun5}. Sirius Black ${libState.verb2}  Harpies, ${libState.noun4} got dirt on your ${libState.pNoun4} . Floating candles Sir Cadogan The Sight three hoops disciplinary ${libState.adverb}. Grindlewald ${libState.adjective} tail Sorcerer's Stone biting teacup. Side-along dragon-scale ${libState.pNoun5} Filch 20 points, Mr. ${libState.noun6}.`,
      user_id: 2,
      category_id: 3
    }
  ];

  return (
    <div>
      <h1>A list of Dev Libs</h1>
      {data.map(lib => (
        <LibCard key={lib.id} lib={lib} user_id={lib.user_id} />
      ))}
    </div>
  );
};
export default DevLib;
