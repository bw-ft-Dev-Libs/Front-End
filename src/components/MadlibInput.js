import React, {useContext} from 'react'

import {WordsContext} from '../hooks/WordsContext'
import Dropdown from './Dropdown'
import {CategoriesContext} from '../hooks/CategoriesContext'



const MadlibInput = (props) => {
    const { categories, setCategories } = useContext(CategoriesContext)
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
                <Dropdown />
                <label>
                    Enter a noun.
                    <input name='noun1' type='text' value={words.noun1} onChange={handleChange} />
                </label>
                <label>
                    Enter a verb.
                    <input name='verb1' type='text' value={words.verb1} onChange={handleChange} />
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
                    <input name='noun2' type='text' value={words.noun2} onChange={handleChange} />
                </label>
                <label>
                    Enter a noun.
                    <input name='noun3' type='text' value={words.noun3} onChange={handleChange} />
                </label>
                <label>
                    Enter a noun.
                    <input name='noun4' type='text' value={words.noun4} onChange={handleChange} />
                </label>
                <label>
                    Enter a noun.
                    <input name='noun5' type='text' value={words.noun5} onChange={handleChange} />
                </label>
                <label>
                    Enter a verb.
                    <input name='verb2' type='text' value={words.verb2} onChange={handleChange} />
                </label>
                <label>
                    Enter a pronoun.
                    <input name='pNoun1' type='text' value={words.pNoun1} onChange={handleChange} />
                </label>
                <label>
                    Enter a pronoun.
                    <input name='pNoun2' type='text' value={words.pNoun2} onChange={handleChange} />
                </label>
                

                <button className='input-submit-button'> Submit </button>

            </form>
        </div>
    )
}

export default MadlibInput