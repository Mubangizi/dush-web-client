import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./SideBar.css";
import { Send } from "@material-ui/icons";

const SideBar = () => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawer = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const sendToHome = () => {
    history.push("/");
  };
  return (
    <div className="SideBar">
      <div className={`SideBarContent Side-${open}`}>
        <div className="NavItems">
          <NavLink to={{ pathname: `/` }} exact={true}>
            Dashboard
          </NavLink>
          <NavLink to={{ pathname: `/send` }}>Send</NavLink>
          <NavLink to={{ pathname: `/deposit` }}>Deposit</NavLink>
        </div>
      </div>
      {/* <div className="SideControllerBtn">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
        >
          {!open ? <MenuOutlinedIcon /> : <CloseOutlinedIcon />}
        </IconButton>
      </div> */}
    </div>
  );
};

export default SideBar;
