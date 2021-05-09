import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Layout from "../Layout";
import "./Send.css";

const Send = () => {
  const [values, setValues] = useState({
    address: "",
    amount: "",
  });
  const { amount, address } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values });
  };

  return (
    <Layout>
      <h1>Send Money</h1>
      <div className="SendComponent">
        <form action="" onSubmit={handleSubmit} className="SendForm">
          <TextField
            id="outlined-error"
            label="Recipient Address"
            variant="outlined"
            autoComplete="off"
            name="address"
            required="true"
            value={address}
            onChange={handleChange("address")}
          />
          <TextField
            id="outlined-error"
            label="Enter Amount"
            variant="outlined"
            autoComplete="off"
            type="number"
            name="amount"
            required="true"
            value={amount}
            onChange={handleChange("amount")}
          />
          <Button type="submit" className="MainButton">
            Send
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Send;
