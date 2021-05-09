import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Send from "./components/Send";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/send" component={Send} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
