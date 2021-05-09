import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./LoginPage.css";

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values });
  };

  return (
    <div className="LoginPage">
      <div className="LoginCard">
        <div className="LoginItems">
          <div className="LoginCardHeader">
            <img src={Logo} alt="" />
            <h1>Login</h1>
          </div>
          <form action="" onSubmit={handleSubmit} className="LoginForm">
            <TextField
              id="outlined-error"
              label="Email"
              variant="outlined"
              name="email"
              required="true"
              type="email"
              value={email}
              onChange={handleChange("email")}
            />
            <TextField
              id="outlined-error"
              label="Password"
              variant="outlined"
              name="password"
              required="true"
              type="password"
              value={password}
              onChange={handleChange("password")}
            />
            <Button type="Submit" className="LoginButton">
              Login
            </Button>
          </form>
          <div className="LoginFooter">
            <p>If you dont have an account,</p>
            <Link to="/signup">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
