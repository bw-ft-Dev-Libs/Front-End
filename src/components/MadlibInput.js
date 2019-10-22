import React, {useContext} from 'react'
import {axiosWithAuth} from "../utils/axiosWithAuth"
import {WordsContext} from '../hooks/WordsContext'



const MadlibInput = (props) => {
    
    const {words, setWords} = useContext(WordsContext)
    const handleChange = e => {
        e.preventDefault()
        setWords({
            ...words,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = e => {
        e.preventDefault()
        props.history.push('/create')
    }

    return (
        <div className='form-container'>
            <h2 className='form-header'> Enter your words to create a Dev-Lib!</h2>
            <form className='input-form' onSubmit={handleSubmit}>
                <label>
                    Enter a noun.
                    <input name='noun1' type='text' value={words.noun} onChange={handleChange} />
                </label>
                <label>
                    Enter a verb.
                    <input name='verb1' type='text' value={words.verb} onChange={handleChange} />
                </label>
                <label>
                    Enter an adjective.
                    <input name='adjective' type='text' value={words.adjective} onChange={handleChange} />
                </label>
                <label>
                    Enter an adverb.
                    <input name='adverb' type='text' value={words.adverb} onChange={handleChange} />
                </label>
                <label>
                    Enter a noun.
                    <input name='noun2' type='text' value={words.noun} onChange={handleChange} />
                </label>
                <label>
                    Enter a noun.
                    <input name='noun3' type='text' value={words.noun} onChange={handleChange} />
                </label>
                <label>
                    Enter a noun.
                    <input name='noun4' type='text' value={words.noun} onChange={handleChange} />
                </label>
                <label>
                    Enter a noun.
                    <input name='noun5' type='text' value={words.noun} onChange={handleChange} />
                </label>
                <label>
                    Enter a verb.
                    <input name='verb2' type='text' value={words.noun} onChange={handleChange} />
                </label>
                <label>
                    Enter a pronoun.
                    <input name='Pnoun1' type='text' value={words.noun} onChange={handleChange} />
                </label>
                <label>
                    Enter a pronoun.
                    <input name='Pnoun2' type='text' value={words.noun} onChange={handleChange} />
                </label>

                <button className='input-submit-button'> Submit </button>

            </form>
        </div>
    )
}

export default MadlibInput