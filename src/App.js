import React, {useState} from 'react';
import Welcomepage from "./components/Welcomepage";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/NavBar";
import Profile from "./components/Profile";
import './App.css';
import DevLib from "./components/DevLib";
import MadlibInput from './components/MadlibInput'
import {WordsContext} from './hooks/WordsContext'
import {MadLibContext} from './hooks/MadLibContext'

function App(props) {

  const [words, setWords] = useState({
    noun:'',
    verb:'',
    adverb:'',
    adjective:''
  })



  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <MadLibContext.Provider value = {{words, setWords}}>
           <WordsContext.Provider>
              <Route exact path="/" component={Welcomepage} /> 
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* <PrivateRoute exact path="/profile" component={Profile} />  */}
              {/* <DevLib /> */}
              <Route exact path="/profile" component={Profile} />
               <MadlibInput props={props}/>
           </WordsContext.Provider>
          </MadLibContext.Provider>
    
             
        </Switch>
      </Router>
    </div>
  );







}

export default App;

