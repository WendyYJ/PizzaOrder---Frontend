import React from 'react';
import '../PizzaMenu/Style/pizzamenu.scss';
import Header from '../PageLayout/Header/Header';
import Sidebar from '../PageLayout/Sidebar';
import Cart from '../PageLayout/Cart';
import Main from '../PizzaMenu/Components/Main';
//import Horizon from '../PizzaMenu/Components/Horizon';
import HorizonBar from '../PageLayout/HorizonBar';
//import '.././PageLayout/Style/PageStyle.scss';
// import Search from '../PizzaMenu/Components/Search';


const PizzaMenu = () => {
   return (
    <div className="Menu-container">
      <Header />
      <Sidebar />
      <Main />
      <Cart />
      <HorizonBar style={{position:"relative", left:"100px", top:"-800px"}}/>
      
    </div>
  );
}

export default PizzaMenu;
