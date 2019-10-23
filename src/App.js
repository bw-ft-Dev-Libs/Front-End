import React, { useState } from "react";
//Styling
import "./App.css";
import "./styling/madlibInput.css";
import "./styling/dropdown.css";
//Components
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import DevLib from "./components/DevLib";
import MadlibInput from "./components/MadlibInput";
import CreateMadLib from "./components/Create";
//Context
import { CategoriesContext } from "./hooks/CategoriesContext";
import { WordsContext } from "./hooks/WordsContext";
import { MadLibContext } from "./hooks/MadLibContext";

function App(props) {
  const [madLibs, setMadlibs] = useState([]);
  const [categories, setCategories] = useState();
  const [words, setWords] = useState({
    noun1: "",
    noun2: "",
    noun3: "",
    noun4: "",
    noun5: "",
    pNoun1: "",
    pNoun2: "",
    verb1: "",
    verb2: "",
    adverb: "",
    adjective: ""
  });

  const ChangeCategories = value => {
    setCategories(value)
    console.log('from change categories', value)
  }

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <MadLibContext.Provider value={{ madLibs, setMadlibs }}>
            <WordsContext.Provider value={{ words, setWords }}>
              <CategoriesContext.Provider value={{ categories, setCategories, ChangeCategories }}>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <Route path="/devlibs" component={DevLib} />
                <Route
                  path="/input"
                  render={props => <MadlibInput {...props} />}
                />
                <Route
                  path="/create"
                  render={props => <CreateMadLib {...props} />}
                />
              </CategoriesContext.Provider>
            </WordsContext.Provider>
          </MadLibContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
