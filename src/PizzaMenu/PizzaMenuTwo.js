import React from 'react';
import '../PizzaMenu/Style/pizzamenu.scss';
import Header from '../PageLayout/Header/Header'
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader'

const PizzaMenuTwo = () => {
  return (
    <div className ="MenuTwo-container">
      <Header />
      <SecondaryHeader headername={"Pizza Menu"}/>

    </div>

  );
}

export default PizzaMenuTwo;