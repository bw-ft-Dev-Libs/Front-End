import React from "react";
import { Navvy, Logo, NavElems } from "../styles/NavStyle";
import { BrowserRouter as Router } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
    <Router>
        <Navvy>
            <Logo>
                LOGO
            </Logo>
            <NavElems>
                <a href="/">Home</a>
                <a href="/profile" >Profile</a>                
                <a href="/login">Login</a>
                <a href="/register">Signup</a>
                <a href="/devlibs">DevLibs</a>
            </NavElems>
        </Navvy>
    </Router>
</div>
    )
}