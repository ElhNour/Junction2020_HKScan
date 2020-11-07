import React from "react";
import NavLinks from "./NavLinks";
import logo from "../../assets/img/HKScan_logo.png";
import slogan from "../../assets/img/hkscan-purpose.svg";
import './MainNavigation.css'
import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <header>
        <NavLink to="/" className="logo">
        <img src={logo} alt="" />
        </NavLink>
    
      <img src={slogan} alt="" />
      <nav>
        <NavLinks />
      </nav>
    </header>
  );
};

export default MainNavigation;
