import React, {useEffect, useState, useContext} from 'react'
import { MadLibContext } from '../hooks/MadLibContext'
import { WordsContext } from '../hooks/WordsContext'
import axiosWithAuth from '../utils/axiosWithAuth';
import {CategoriesContext} from '../hooks/CategoriesContext'
import LibCard from './LibCard'
import { ButtonAdd } from "./Buttons";



const CreateMadLib = props => {
    const { words} = useContext(WordsContext)
    const { categories} = useContext(CategoriesContext)
    const data = {
        1:  {
    
            'lib': `If you want to become ${words.noun1} literate, here are some key
                    ${words.adjective} that you should ${words.verb1} as quickly as possible:
        
                    CD ROM: Stands for compact ${words.noun2}... read only
                    ${words.noun3}. This compact disc can hold as many as 600 ${words.adverb},
                    ${words.verb2}, which is the equivalent of 700 floppy ${words.noun4}.`,
            'user_id': Number(localStorage.getItem('user_id')),
            'category_id': 1
            },
        
        2: {
            lib: `This is a dev lib This is a dev lib ${words.noun1}. This is a dev lib This is a ${words.pNoun1} lib This is a dev lib This is a ${words.verb1} lib This is a ${words.noun2} lib This        is a ${words.pNoun2} lib This is a  lib This is a dev lib This is a dev lib This is a dev ${words.noun4} This is a dev ${words.noun3} This is a dev lib This is a dev lib This is a         dev lib This is a ${words.verb1}`,
          user_id: Number(localStorage.getItem('user_id')),
          category_id: 2
        },
        3: {
            lib: `hodorhodor ${words.noun1} hoddddoooorr hodorhodor ${words.pNoun1} hoddddoooorr hodorhodor ${words.verb1} hoddddoooorr ${words.noun2} hodor ${words.noun3} hodorhodor hodor                  hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor ${words.pNoun2} hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor ${words.verb2} hodorhodor ${words.adjective}              hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor ${words.adverb} hoddddoooorr hodorhodor hodor hoddddoooorr hodorhodor hodor `,
          user_id: Number(localStorage.getItem('user_id')),
          category_id: 3
        }
    }
      

    const {madLibs, setMadlibs} = useContext(MadLibContext)
    const [addMadLib, setAddMadlib] = useState ([])
    

    useEffect(()=> {
       setAddMadlib(data[categories]) 

        axiosWithAuth()
            .get('/api/devLib')
            .then(res => {
                console.log(res.data)
                setMadlibs(res.data)
                
            })
            .catch(err => console.log(err.response))
    }, [])

    const handleSubmit = e => {
            console.log('from handle submit', e)
               console.log(addMadLib)
            axiosWithAuth()
                .post('/api/devLib', addMadLib )
                .then((res) => {
                    console.log(res.data)                    
                    // props.history.push('/devlibs')
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