import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import SearchIcon from '@material-ui/icons/Search';
import Header from './PizzaMenu/PizzaDetails/Header';
import Navigation from './PizzaMenu/PizzaDetails/Navigation';
import Sidebar from './PizzaMenu/PizzaDetails/Sidebar';
import Menu from './PizzaMenu/PizzaDetails/Menu';
import Sample from './PizzaMenu/PizzaDetails/Sample';
import CartTotals from './PizzaMenu/PizzaDetails/CartTotals';


function MenuMain() {
  return (
    <div className="Menu-container">
     
        <Header />

        <Navigation />
        <Sidebar />

        <Menu />
        <Sample />
        <CartTotals />
        
  
    </div>
  );
}

export default MenuMain;
