import React, { useState } from "react";
import MenuSidebar from "./MenuSidebar";
import MenuToggle from "./MenuToggle";


  const PizzamenuSidebar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openHandler = () => {
    setSidebarOpen(sidebarOpen => !sidebarOpen)
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
      {sidebarOpen && <MenuSidebar close={sidebarCloseHandler} menuSidebar="menuSidebar" />}
      {menuSidebar}
      <MenuToggle click={openHandler} />
      <p>{children}</p>
    </div>
  );
};

export default PizzamenuSidebar;
