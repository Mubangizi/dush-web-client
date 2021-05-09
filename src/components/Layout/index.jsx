import { Container } from "@material-ui/core";
import React from "react";
import Header from "../Header";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export const HomeLayout = ({ children }) => {
  return (
    <div className="Layout">
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
