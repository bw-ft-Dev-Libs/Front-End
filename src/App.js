import React, {useState} from 'react';
import Welcomepage from "./components/Welcomepage";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import './App.css';
import DevLib from "./components/DevLib";
import MadlibInput from './components/MadlibInput'
import {WordsContext} from './hooks/WordsContext'
import {MadLibContext} from './hooks/MadLibContext'
import CreateMadLib from './components/Create'

function App(props) {

  const [madLibs, setMadlibs] = useState([])
  

  const [words, setWords] = useState({
    noun1:'',
    noun2: '', 
    noun3: '',
    noun4: '',
    Pnoun1: '',
    Pnoun2: '',
    verb1:'',
    verb2:'',
    adverb:'',
    adjective:''
  })



  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <MadLibContext.Provider value = {{madLibs, setMadlibs }} >
           <WordsContext.Provider value = {{words, setWords}}>

              <Route exact path="/" component={Welcomepage} /> 
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* <PrivateRoute exact path="/profile" component={Profile} />  */}
              <Route path ='/devlibs' component={DevLib} />
              <Route exact path="/profile" component={Profile} />
              <Route path ='/input' render={props => <MadlibInput {...props}/>}/>              
              <Route path ='/create' component={CreateMadLib} />
              
           </WordsContext.Provider>
          </MadLibContext.Provider>
    
             
        </Switch>
      </Router>
    </div>
  );







}

export default App;

