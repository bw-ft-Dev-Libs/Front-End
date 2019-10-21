import React, {useContext} from 'react'
import {axiosWithAuth} from "../utils/axiosWithAuth"
import {MadLibContext} from '../hooks/MadLibContext'



const MadlibInput = (props) => {
    
    const {words, setWords} = useContext(MadLibContext)
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
                    <input name='noun' type='text' value={words.noun} onChange={handleChange} />
                </label>
                <label>
                    Enter a verb.
                    <input name='verb' type='text' value={words.verb} onChange={handleChange} />
                </label>
                <label>
                    Enter an adjective.
                    <input name='adjective' type='text' value={words.adjective} onChange={handleChange} />
                </label>
                <label>
                    Enter an adverb.
                    <input name='adverb' type='text' value={words.adverb} onChange={handleChange} />
                </label>

                <button className='input-submit-button'> Submit </button>

            </form>
        </div>
    )
}

export default MadlibInput