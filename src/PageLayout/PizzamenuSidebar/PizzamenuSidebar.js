import React, { Fragment, useState } from "react";
import MenuSidebar from "./MenuSidebar";
import MenuToggle from "./MenuToggle";
import Header from "../Header/Header";

const PizzamenuSidebar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  const sidebarCloseHandler = () => {
    setSidebarOpen(false);
  };

  let menuSidebar;
  if (sidebarOpen) {
    menuSidebar = (
      <MenuSidebar close={sidebarCloseHandler} menuSidebar="menuSidebar" />
    );
  }

  return (
    <div className="menu-sidebar">
      {menuSidebar}
      <MenuToggle click={openHandler} />
      <p>{children}</p>
    </div>
  );
};

export default PizzamenuSidebar;
