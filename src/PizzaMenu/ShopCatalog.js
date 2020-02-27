import React from 'react';
import Header from '../PageLayout/Header/Header';
import Filter from '../PizzaMenu/Components/Filter';
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader'

const ShopCatalog = () => {
  
   return (
    <div className="Catalog-container">
       <Header />
       <SecondaryHeader headername={"Pizza Menu"}/>
       <Filter />
    </div>
   );
}


export default ShopCatalog;