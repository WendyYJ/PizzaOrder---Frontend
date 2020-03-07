import React, { Component } from "react";
import Toolbar from "./Toolbar";

// import Header from '../Header/Header';

class ShoppingCartSidebar extends Component {
  render() {
    return (
      <div className="cart-sidebar">
        <Toolbar />
      </div>
    );
  }
}

export default ShoppingCartSidebar;
