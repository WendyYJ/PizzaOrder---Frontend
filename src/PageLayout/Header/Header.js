import React, {Fragment, useState} from 'react';
import '../../PizzaMenu/Style/pizzamenu.scss';
import cart from "../../asset/icon/header_cart.png";
// import menu from "../../asset/icon/menu_icon.png";
//import Toggle from '../Toggle';
//import SidebarNav from '../SidebarNav';

const Header = () => {

  return (
    <div className="header">
     <header>
        <h3>Margherita</h3> 
        <img src={cart} alt="header_cart" id="header_cart" />
      
    </header>
    </div>
  );
}

export default Header;
    
