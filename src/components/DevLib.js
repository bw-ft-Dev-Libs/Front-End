import React, { useState } from "react"
import LibCard from "./LibCard"

const data = [
 {
     "id": 1,
     "lib": `If you want to become ${noun1}.literate, here are some key
${pNoun1}.that you should ${verb1}.as quickly as possible:

CD ROM: Stands for compact ${noun2}... read only
${noun7}. This compact disc can hold as many as 600,
${pNoun2}, which is the equivalent of 700 floppy ${pNoun3}.

CYBERSPACE: Stands for the imaginary ${noun3}.that people,
enter when they ${verb2}.with each other through computers on
a collection of ${pNoun4}, known as the Inter${noun4}.

E-Mail: Means ${adverb}.transmitted ${noun5}.

MODEM: Is the device that allows a ${adjective}.computer to
transmit ${pNoun5}.over a phone ${noun6}.`,
     "user_id": 1,
     "category_id": 1
   },
   {
     "id": 13,
     "lib": `This is a dev lib This is a dev lib ${noun1}. This is a dev lib This is a ${pNoun1} lib This is a dev lib This is a ${verb1} lib This is a ${noun2} lib This is a ${noun7} lib This is a  lib This is a dev lib This is a dev lib This is a dev ${pNoun2} This is a dev ${pNoun3} This is a dev lib This is a dev lib This is a dev lib This is a ${noun3} lib This is a dev ${verb2} This is a ${noun5} lib This is a dev lib This is a dev${noun4} lib This is a dev lib ${pNoun4} is a dev lib This is a dev lib This is a dev lib This is a dev ${adverb} This is ${adjective} dev lib ${pNoun5} is a dev lib This is ${noun6} dev lib.`,
     "user_id": 2,
     "category_id": 3
   },
   {
     "id": 3,
     "lib": `hodorhodor ${noun1} hoddddoooorr hodorhodor ${pNoun1} hoddddoooorr hodorhodor ${verb1} hoddddoooorr ${noun2} hodor ${noun7} hodorhodor hodor hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor ${pNoun2} hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor ${pNoun3} hodorhodor ${noun5} hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor ${verb2} hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor ${noun4} hodorhodor hodor ${pNoun4} hodorhodor hodor hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor ${adverb} hoddddoooorr hodorhodor ${adjective} hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor hoddddoooorr ${pNoun5} hodor hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor hoddddoooorr ${noun6} hodor hoddddoooorr `,
     "user_id": 2,
     "category_id": 3
   },
      {
     "id": 9,
     "lib": `${noun1} dirigible plums, ${pNoun1} Krum hexed memory ${verb1} Animagus ${noun2} Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! ${noun2} venom Umbridge swiveling ${verb1} eye Levicorpus, nitwit ${noun7} oddment ${pNoun2}. Chasers ${pNoun3} quills The Boy Who Lived bat spleens cupboard under the stairs flying ${noun5}. Sirius Black ${verb2}  Harpies, ${noun4} got dirt on your ${pNoun4} . Floating candles Sir Cadogan The Sight three hoops disciplinary ${adverb}. Grindlewald ${adjective} tail Sorcerer's Stone biting teacup. Side-along dragon-scale ${pNoun5} Filch 20 points, Mr. ${noun6}.`
     "user_id": 2,
     "category_id": 3
   }
]








const DevLib = (props) => {

    return(
        <div>
            <h1>A list of Dev Libs</h1>
            {data.map(lib => <LibCard key={lib.id} lib={lib} />)}
            </div>
    )

}
export default DevLib