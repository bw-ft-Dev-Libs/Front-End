import React, {useEffect, useState, useContext} from 'react'
import { MadLibContext } from '../hooks/MadLibContext'
import { WordsContext } from '../hooks/WordsContext'
import axiosWithAuth from '../utils/axiosWithAuth';
import LibCard from './LibCard'



const CreateMadLib = props => {
    const { words} = useContext(WordsContext)
    const data = [
        {
          id: 1,
          lib: `If you want to become ${words.noun1}.literate, here are some key
                ${words.pNoun1}.that you should ${words.verb1}.as quickly as possible:
    
                CD ROM: Stands for compact ${words.noun2}... read only
                ${words.noun3}. This compact disc can hold as many as 600 ${words.noun4},
                ${words.pNoun2}, which is the equivalent of 700 floppy ${words.adverb}.`,
          user_id: localStorage.getItem('token'),
          category_id: 1
        },
        {
          id: 2,
          lib: `This is a dev lib This is a dev lib ${words.noun1}. This is a dev lib This is a ${words.pNoun1} lib This is a dev lib This is a ${words.verb1} lib This is a ${words.noun2} lib This        is a ${words.pNoun2} lib This is a  lib This is a dev lib This is a dev lib This is a dev ${words.noun4} This is a dev ${words.noun3} This is a dev lib This is a dev lib This is a         dev lib This is a ${words.verb1}`,
          user_id: localStorage.getItem('token'),
          category_id: 2
        },
        {
          id: 3,
          lib: `hodorhodor ${words.noun1} hoddddoooorr hodorhodor ${words.pNoun1} hoddddoooorr hodorhodor ${words.verb1} hoddddoooorr ${words.noun2} hodor ${words.noun3} hodorhodor hodor                  hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor ${words.pNoun2} hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor ${words.verb2} hodorhodor ${words.adjective}              hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor ${words.adverb} hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor `,
          user_id: localStorage.getItem('token'),
          category_id: 3
        },
        {
          id: 4,
          lib: `${words.noun1} dirigible plums, ${words.pNoun1} Krum hexed memory ${words.verb1} Animagus ${words.noun2} Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! ${words.noun3} venom Umbridge swiveling ${words.verb2} eye Levicorpus, nitwit ${words.adjective} oddment ${words.pNoun2}. Chasers ${words.adverb} quills The Boy Who Lived bat spleens cupboard under the stairs flying ${words.noun4}. `,
          user_id: localStorage.getItem('token'),
          category_id: 3
        }
      ];

    const {madLibs, setMadlibs} = useContext(MadLibContext)
    const [addMadLib, setAddMadlib] = useState ([])
    

    useEffect(()=> {
       setAddMadlib(data[0]) 

        axiosWithAuth()
            .get('/api/devLib')
            .then(res => {
                console.log(res.data)
                setMadlibs(res.data)
                
            })
            .catch(err => console.log(err.response))
    }, [])

    const handleSubmit = e => {
               
        axiosWithAuth()
            .post('/api/devLib', addMadLib )
            .then(() => {
                console.log(...madLibs)
                setMadlibs({...madLibs, addMadLib})
                props.history.push('/devlibs')
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div className="create-container">
            <h3 className='create-header'> Your Dev-Lib! </h3>
            
                 <LibCard lib={addMadLib} />
                
            <button className='create-button' onClick={handleSubmit}> Add your Dev Lib! </button>

        </div>

    )
}

export default CreateMadLib