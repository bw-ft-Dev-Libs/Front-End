//FILE PRESENT DURING FIRST GIT PULL ORIGIN MASTER
//NAVBAR CREATED BY J.ATWOOD

import React from "react";
import { AcctLink } from "../styles/FormsStyles";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #29ABA4 30%, #E0FFFF 90%)',
      borderRadius: 3,
      border: 0,
      color: 354458,
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(53, 68, 88, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

const ButtonFun = () => {
    return (
        // <form>
        <Link to='/input'>
        <StyledButton >
            CREATE YOUR OWN DEVLIB
        </StyledButton>
        </Link>
        // </form>
    )
}


const ButtonAcct = () => {
    return (
        <AcctLink>
            <a href="/login">Already have account?</a>
        </AcctLink>
    )
}

const ButtonSign = () => {
    return (
        <AcctLink>
            <a href="/register">Create an Account</a>
        </AcctLink>
    )
}


export { ButtonAcct, ButtonSign, ButtonFun }