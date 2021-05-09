import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const SignupPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const { userName, email, password, confirmPassword } = values;

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
            <h1>Register</h1>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <form action="" onSubmit={handleSubmit} className="LoginForm">
            <TextField
              id="outlined-error"
              label="Username"
              variant="outlined"
              name="username"
              required="true"
              type="text"
              value={userName}
              onChange={handleChange("userName")}
            />
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
            <TextField
              id="outlined-error"
              label="Confirm Password"
              variant="outlined"
              name="confirmPassword"
              required="true"
              type="password"
              value={confirmPassword}
              onChange={handleChange("confirmPassword")}
            />
            <Button type="Submit" className="LoginButton">
              Create Account
            </Button>
          </form>
          <div className="LoginFooter">
            <p>Already have an account,</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
