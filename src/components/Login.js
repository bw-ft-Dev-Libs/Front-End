//FILE PRESENT DURING FIRST GIT PULL ORIGIN MASTER
//LOGIN CREATED BY J.ATWOOD

import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Button } from "../styles/ButtonStyles"
import { Card, Box } from "../styles/FormsStyles";
import { ButtonSign } from "./Buttons";

const Login = props => {

    const [form, setForm] = React.useState({ username: "", password: "" });

    const handleChanges = e => {
        setForm({...form, [e.target.name]: e.target.value}); 
    }

    const login = e => {
        e.preventDefault(); 
        axiosWithAuth()
            .post("/api/auth/login", form) 
            .then(res => {
                console.log("LOGIN", res);
<<<<<<< HEAD
                localStorage.setItem("token", res.data.token);
                props.history.push("/");
=======
                localStorage.setItem("token", res.data.payload);
                props.history.push("/profile");
>>>>>>> 3b31ec2629cb11cd29964261b619d742f8005d58
            })
            .catch(error => {
                console.log("LOGINERROR", error.response.data.message)
                alert(error.response.data.message)
                setForm({ username: "", password: "" }); 
         });
    };

    return (
        <Card>
        
            <h2>LOGIN</h2>
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
                <Button type="submit">LOG IN</Button>
                <ButtonSign />
            </form>
            </Box>

            </Card>
        
    )
}

export default Login;