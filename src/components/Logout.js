//LOGOUT CREATED BY J.ATWOOD

import React from "react";

export default function Logout() {

    const logout = e => {
        localStorage.clear();
        window.location.href = "/";
      }

return (
    <div>
        <button onClick={logout} >LOGOUT</button>
    </div>
)};