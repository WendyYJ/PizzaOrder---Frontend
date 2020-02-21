import React from 'react';
import '../PizzaMenu/Style/pizzamenu.scss';
import Header from '../PizzaMenu/Components/Header';
import Sidebar from '../PizzaMenu/Components/Sidebar';
import Cart from '../PizzaMenu/Components/Cart';
import Main from '../PizzaMenu/Components/Main';
import Horizon from '../PizzaMenu/Components/Horizon';


const PizzaMenu = () => {
   return (
    <div className="Menu-container">
      <Header />
      <Sidebar />
      <Main />
      <Cart />
      <Horizon />
    </div>
  );
}

export default PizzaMenu;
