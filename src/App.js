import React from 'react';
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/NavBar";
import Profile from "./components/Profile";
import './App.css';
import DivLib from "./components/DevLib";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          {/* <MadLibContext.Provider value = {{words, setWords}}> */}
           {/* <WordsContext.Provider> */}
              <Route exact path="/" component={Welcome} /> 
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/profile" component={Profile} /> 
              {/* <Route exact path="/profile" component={Profile} /> */}
              <DivLib />
               {/* <MadlibInput props={props}/> */}
           {/* </WordsContext.Provider> */}
          {/* </MadLibContext.Provider> */}
    
             
        </Switch>
      </Router>
    </div>
  );







}

export default App;

