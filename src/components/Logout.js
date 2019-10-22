//LOGOUT CREATED BY J.ATWOOD

import React from "react";
import { Button } from "../styles/ButtonStyles";

export default function LogOut() {

    const logout = e => {
        localStorage.clear();
        window.location.href = "/";
      }

return (
    <div>
        <Button onClick={logout} >LOGOUT</Button>
    </div>
)};