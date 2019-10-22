import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest}) => {

    return (
        <Route 
        {...rest}
        render={props => {
            if (localStorage.getItem('token')) {
                return <Component {...props} />
<<<<<<< HEAD
            } else {
                return <Redirect to="/" />
=======
            } else {              


                return <Redirect to="/" />


>>>>>>> 2579b0cd6cb9dea5bb77a01a7787fbad58e0c46c
            }
        }}
        />
    )
}

export default PrivateRoute
