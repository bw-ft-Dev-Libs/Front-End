import React from 'react';
import Welcomepage from "./components/Welcomepage";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/NavBar";
import Profile from "./components/Profile";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Welcomepage} /> 
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <PrivateRoute exact path="/profile" component={Profile} />  */}
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

