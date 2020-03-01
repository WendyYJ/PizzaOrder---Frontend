import React from 'react';
import Header from '../PageLayout/Header/Header';
import Filter from './Components/Filter';
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader'

const PizzaMenu = () => {
  
   return (
    <div className="Catalog-container">
       <Header />
       <SecondaryHeader headername={"Pizza Menu"}/>
       <Filter />
    </div>
   );
}


export default PizzaMenu;