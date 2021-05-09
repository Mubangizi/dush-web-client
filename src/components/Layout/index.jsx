import { Container } from "@material-ui/core";
import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
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
