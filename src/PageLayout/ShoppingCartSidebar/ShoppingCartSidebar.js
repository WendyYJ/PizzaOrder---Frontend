import React, { Fragment, useState } from "react";
import CartSidebar from "./CartSidebar";
import CartToggle from "./CartToggle";
import Header from "../Header/Header";

const ShoppingCartSidebar = ({ children }) => {
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

  let sidebar;
  if (sidebarOpen) {
    sidebar = <CartSidebar close={sidebarCloseHandler} sidebar="sidebar" />;
  }

  return (
    <div className="cart-sidebar">
      <Fragment>
        <Header />
        {sidebar}
        <CartToggle click={openHandler} />
        <p>{children}</p>
      </Fragment>
    </div>
  );
};

export default ShoppingCartSidebar;
