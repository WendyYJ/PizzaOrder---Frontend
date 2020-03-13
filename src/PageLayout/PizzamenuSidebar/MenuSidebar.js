import React, { useState } from "react";
import "./MenuSidebar.scss";
import { NavLink } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import {
  HOME_URL,
  PIZZAMENU_URL,
  ABOUTUS_URL,
  PIZZABUILDER_URL,
  CONTACT_URL,
  LOGIN_URL,
  MYACCOUNT_URL,
  CHECKOUT_URL
} from "../../routes/URLMap";

const MenuSidebar = props => {
  const [sidebarClass, setSidebarClass] = useState(props.sidebar);

  const closeHandler = event => {
    event.preventDefault();
    setSidebarClass("sidebar close");
    setTimeout(() => {
      props.close();
    }, 1000);
  };

  return (
    <div className={sidebarClass}>
      <div id="close" onClick={closeHandler} />
      <div className="menu-navbar">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="  Search" />
          <button type="submit" className="searchButton">
            <SearchIcon />
          </button>
        </div>
      </div>

      <ul className="menu-link">
        <li>
          <NavLink to={HOME_URL}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={PIZZAMENU_URL}>PIZZA MENU</NavLink>
        </li>
        <li>
          <NavLink to={PIZZABUILDER_URL}>PIZZA BUILDER</NavLink>
        </li>
        <li>
          <NavLink to={ABOUTUS_URL}>ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to={CONTACT_URL}>CONTACT</NavLink>
        </li>
        <br />
        <li>
          <NavLink to={LOGIN_URL}>LOGIN</NavLink>
        </li>
        <li>
          <NavLink to={MYACCOUNT_URL}>MY ACCOUNT</NavLink>
        </li>
        <li>
          <NavLink to={CHECKOUT_URL}>CHECKOUT</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuSidebar;
