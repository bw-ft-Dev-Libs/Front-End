import React from "react";
import { Navvy, Logo, NavElems } from "../styles/NavStyle";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
    
        <Navvy>
            <Logo>
                LOGO
            </Logo>
            <NavElems>
                <Link to="/">Home</Link>
                <Link to="/profile" >Profile</Link>                
                <Link to="/login">Login</Link>
                <Link to="/register">Signup</Link>
                <Link to="/devlibs">DevLibs</Link>
            </NavElems>
        </Navvy>
    
</div>
    )
}