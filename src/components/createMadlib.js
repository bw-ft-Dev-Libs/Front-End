import React from 'react'
import {withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import {axiosWithAuth} from "../utils/axiosWithAuth"

const MadlibForm = () => {

    return (
        <div className="form-container">
            <h2 className = 'form-header'> Create your own MadLib! </h2>
            <Form className='madlib-form'>

                
            </Form>

        </div>
    )

}

export default MadlibForm