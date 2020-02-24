import React from 'react';
import '../PizzaMenu/Style/pizzamenu.scss';
import Header from '../PageLayout/Header/Header'
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader'

const MenuMain = () => {
  return (
    <div className ="MenuMain-container">
      <Header />
      <SecondaryHeader headername={"Pizza Menu"}/>

    </div>

  );
}

export default MenuMain;