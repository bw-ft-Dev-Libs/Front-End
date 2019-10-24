import React, { useEffect, useState, useContext } from "react";
import { MadLibContext } from "../hooks/MadLibContext";
import { WordsContext } from "../hooks/WordsContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import { CategoriesContext } from "../hooks/CategoriesContext";
import LibCard from "./LibCard";
import { ButtonAdd } from "./Buttons";

const CreateMadLib = props => {
  const { words } = useContext(WordsContext);
  const { categories } = useContext(CategoriesContext);
  const data = {
    1: {
      lib: `You’ve seen the craze for learning ${noun1}. But what exactly is coding? Coding is what ${adverb} ${verb1} it possible for us to create computer software, apps and websites. Your ${noun2}, your OS, the apps on your phone, Facebook, and this website – they’re all made with code.

Here’s a simple example of ${noun3}, written in the ${adjective} language:

print 'Hello, ${pronoun2}!'

Many ${verb2} tutorials use that command as their very first ${noun4}, because it’s one of the simplest examples of ${noun5} you can have – it ‘prints’ (displays) the text ‘Hello, ${pronoun1}!’ onto the screen.`,
      user_id: Number(localStorage.getItem("user_id")),
      category_id: 1
    },
    2: {
      lib: `The series centers on ${pronoun2}, the elf-like player ${noun1} and chief protagonist. Link is often given the task of rescuing Princess ${pronoun1} and the kingdom of Hyrule from Ganon, an evil warlord turned demon who is the principal ${noun5} of the series; however, other settings and antagonists have ${verb2}ed in several games. The plots ${adverb} involve the Triforce, a relic representing the virtues of ${noun2}, Wisdom and Power that together are ${adjective}. The ${noun3} in each game is usually not the same incarnation of ${pronoun2}, but a few exceptions ${verb1}.`,
      user_id: Number(localStorage.getItem("user_id")),
      category_id: 2
    },

    3: {
      lib: `On Christmas Eve, NYPD detective ${pronoun2} arrives in Los Angeles, intending to reconcile with his estranged ${noun5}, Holly, at the ${adjective} party of her employer, the Nakatomi Corporation. ${pronoun2} is driven to the party by ${pronoun1}, an ${noun1} limousine driver. While ${pronoun2} changes clothes, the party is ${verb1}ed by the arrival of a German ${noun2}, Hans Gruber, and his ${adverb} armed ${noun3}: computer hacker Theo, Karl and Tony Vreski, Franco, Alexander, Marco, Kristoff, Eddie, Uli, Heinrich, Fritz, and James. The group seizes the ${noun4} and secures those inside as hostages except for ${pronoun2}, who slips away, and ${pronoun1}, who gets ${verb2}ed in the garage.`,
      user_id: Number(localStorage.getItem("user_id")),
      category_id: 3
    }
  };

  const { madLibs, setMadlibs } = useContext(MadLibContext);
  const [addMadLib, setAddMadlib] = useState([]);

  useEffect(() => {
    setAddMadlib(data[categories]);

    axiosWithAuth()
      .get("/api/devLib")
      .then(res => {
        console.log(res.data);
        setMadlibs(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);

  const handleSubmit = e => {
    console.log("from handle submit", e);
    console.log(addMadLib);
    axiosWithAuth()
      .post("/api/devLib", addMadLib)
      .then(res => {
        console.log(res.data);
        // props.history.push('/devlibs')
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="create-container">
      <h3 className="create-header"> Your Dev-Lib! </h3>

      <LibCard lib={addMadLib} />

      <button className="create-button" onClick={handleSubmit}>
        {" "}
        Add your Dev Lib!{" "}
      </button>
    </div>
  );
};

export default CreateMadLib;
