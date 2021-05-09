import { Button, Container, IconButton } from "@material-ui/core";
import { AccountCircleOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import Logo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const goToLogin = () => {
    history.push("/login");
  };
  return (
    <div className="Header">
      <Container>
        <div className="HeaderContent">
          <div className="Logo">
            <img src={Logo} alt="" />
          </div>
          <div className="UserInfo">
            <IconButton>
              <AccountCircleOutlined />
              <div className="HeaderUserName">Hi Allan</div>
            </IconButton>
            <Button onClick={goToLogin}>Logout</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
