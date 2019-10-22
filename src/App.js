import React, {useState} from 'react';

import './App.css';
import './styling/madlibInput.css'


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
      <MadLibContext.Provider value = {{words, setWords}}>
           <WordsContext.Provider>
              <MadlibInput props={props}/>
           </WordsContext.Provider>
      </MadLibContext.Provider>  
    </div>
  );
}

export default App;
