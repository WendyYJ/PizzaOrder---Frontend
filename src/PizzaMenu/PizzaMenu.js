import React from 'react';
import '../PizzaMenu/Style/pizzamenu.scss';
import Header from '../PageLayout/Header/Header';
import Sidebar from '../PageLayout/Sidebar';
import Cart from '../PageLayout/Cart';
import Main from '../PizzaMenu/Components/Main';
import Horizon from '../PizzaMenu/Components/Horizon';
// import Search from '../PizzaMenu/Components/Search';


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
