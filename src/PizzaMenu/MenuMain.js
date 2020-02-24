import React from 'react';
import '../PizzaMenu/Style/pizzamenu.scss';
import Header from '../PageLayout/Header/Header';
import ThirdHeader from '../PageLayout/Header/ThirdHeader';
import HorizonBar from '../PageLayout/HorizonBar';

const MenuMain = () => {
  return (
    <div className ="MenuMain-container">
      <Header />
      <ThirdHeader headername={"Pizza Menu"} headername2={"Peri-Peri"} />

      <HorizonBar />
    </div>
  );
}

export default MenuMain;