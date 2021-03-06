import React, {  useContext } from 'react'
import {CategoriesContext} from '../hooks/CategoriesContext'

const Dropdown = () => {

    const { setCategories} = useContext(CategoriesContext)

    const ChangeCategories = e => {
       
       console.log('ran on initial render', e.target.value)
       setCategories(parseInt(e.target.value))
      }

    return (
        // <ul>
        //     <li onClick={()=> ChangeCategories(1)}>Action </li>
        // </ul>
        <select id="select" className="select-category" onChange={(e) => ChangeCategories(e)}>
            <option>Select a Category</option>
            <option value='1'>Action</option>
            <option value='2'>Adventure</option>
            <option value='3'>Code</option>
        </select>
    )
}

export default Dropdown