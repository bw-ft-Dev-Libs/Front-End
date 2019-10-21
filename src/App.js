import React, {useState} from 'react';

import './App.css';
import './styling/madlibInput.css'

import MadlibInput from './components/MadlibInput'

import {MadLibContext} from './hooks/MadLibContext'

function App() {

  const [words, setWords] = useState({
    noun:'',
    verb:'',
    adverb:'',
    adjective:''
  })

  return (
    <div className="App">
      <MadLibContext.Provider value = {{words, setWords}}>
        <MadlibInput />
      </MadLibContext.Provider>  
    </div>
  );
}

export default App;
