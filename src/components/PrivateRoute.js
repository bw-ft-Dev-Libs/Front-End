import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest}) => {

    return (
        <Route 
        {...rest}
        render={props => {
            if (localStorage.getItem('token')) {
                return <Component {...props} />
            } else {
<<<<<<< HEAD
                return <Redirect to="/" />
=======
                return <Redirect to='/login' />
>>>>>>> 0d8175c043663085fa568613af0349554c3db9ca
            }
        }}
        />
    )
}

export default PrivateRoute