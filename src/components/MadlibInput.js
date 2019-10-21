import React from 'react'

const MadlibInput = () => {

    return (
        <div className='form-container'>
            <h2 className='form-header'> Enter your words to create a Dev-Lib!</h2>
            <form className='input-form'>
                <label>
                    Enter a noun.
                    <input name='noun' type='text' value='' />
                </label>
                <label>
                    Enter a verb.
                    <input name='verb' type='text' value='' />
                </label>
                <label>
                    Enter an adjective.
                    <input name='adjective' type='text' value='' />
                </label>
                <label>
                    Enter an adverb.
                    <input name='adverb' type='text' value='' />
                </label>

            </form>
        </div>
    )
}

export default MadlibInput