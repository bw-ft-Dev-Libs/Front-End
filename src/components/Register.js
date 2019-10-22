//FILE PRESENT DURING FIRST GIT PULL ORIGIN MASTER
//SIGNUP CREATED BY J.ATWOOD

import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Button } from "../styles/ButtonStyles"
import { Card, Box } from "../styles/FormsStyles";
import { ButtonAcct } from "./Buttons";


export default function Register(props) {

    const [form, setForm] = React.useState({ username: "", password: "" });

    const handleChanges = e => {
        setForm({...form, [e.target.name]: e.target.value}); 
    }

    const login = e => {
        e.preventDefault(); 
        axiosWithAuth()
            .post("/api/auth/register", form) 
            .then(res => {
                console.log("LOGIN", res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/login");
            })
            .catch(error => {
                console.log("SIGNUPERROR", error.response.data.message)
                alert(error.response.data.message)
                setForm({ username: "", password: "" }); 
         });
    };

    return (
        <Card>
            <h2>CREATE ACCOUNT</h2>
            <Box>
            <form onSubmit={login}>
                <label>Username</label>
                <input 
                    required
                    type="text"
                    placeholder="username"
                    name="username" 
                    onChange={handleChanges}
                    value={form.username}
                />
            
                <label>Password</label>
                <input 
                    required
                    type="password"
                    placeholder="password"
                    name="password" 
                    onChange={handleChanges}
                    value={form.password}
                />
                <Button type="submit">SUBMIT</Button>
                <ButtonAcct />
            </form>
            </Box>

        </Card>
    )
}