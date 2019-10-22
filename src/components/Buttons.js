//FILE PRESENT DURING FIRST GIT PULL ORIGIN MASTER
//NAVBAR CREATED BY J.ATWOOD

import React from "react";
import { Button, A, Test } from "../styles/ButtonStyles";
import { AcctLink } from "../styles/FormsStyles";


const ButtonReg = () => {
    return (
        <Test>
            <Button>
                <A href="/register">REGISTER</A>
            </Button>
        </Test>
    )

}

const ButtonLog = () => {
    return (
        <Test>
            <Button>
                <A href="/login">LOGIN</A>
            </Button>
        </Test>
    )

}

// const ButtonFun = () => {
//     return (
//         <Test>
//             <Fun>
//                 <A href="/register">Links to /register</A>
//             </Fun>
//         </Test>
//     )
// }

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


export { ButtonReg, ButtonLog, ButtonAcct, ButtonSign }