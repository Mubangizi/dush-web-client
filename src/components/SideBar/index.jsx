import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className={`SideBarContent `}>
        <div className="NavItems">
          <NavLink to={{ pathname: `/` }} exact={true}>
            Dashboard
          </NavLink>
          <NavLink to={{ pathname: `/send` }}>Send</NavLink>
          <NavLink to={{ pathname: `/deposit` }}>Deposit</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
