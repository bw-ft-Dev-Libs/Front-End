import React, { useState, useContext } from 'react'
import {CategoriesContext} from '../hooks/CategoriesContext'

const Dropdown = () => {

    const {setCategories} = useContext(CategoriesContext)

    return (
        <div class="dropdown">
            <span>Categories</span>
            <div class="dropdown-content">
            <p onClick={setCategories(1)}>Action</p>
            <p onClick={setCategories(2)}>Adventure</p>
            <p onClick={setCategories(3)}>Code</p>
            </div>
        </div>
    )
}

export default Dropdown