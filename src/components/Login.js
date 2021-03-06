//FILE PRESENT DURING FIRST GIT PULL ORIGIN MASTER
//LOGIN CREATED BY J.ATWOOD

import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
// import { Button } from "../styles/ButtonStyles";
import { Card, Box } from "../styles/FormsStyles";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import { ButtonSign } from "./Buttons";

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

const Login = props => {
  const [form, setForm] = React.useState({ username: "", password: "" });

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", form)
      .then(res => {
        console.log("LOGIN", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.userId);
        props.history.push("/profile");
      })
      .catch(error => {
        console.log("LOGINERROR", error.response.data.message);
        alert(error.response.data.message);
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
          <StyledButton type="submit">LOG IN</StyledButton>
          <ButtonSign />
        </form>
      </Box>
    </Card>
  );
};

export default Login;
