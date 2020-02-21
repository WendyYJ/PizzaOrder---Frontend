import React from 'react';
// import '../PizzaMenu/Style/pizzamenu.scss';
import Header from '../PizzaMenu/Components/Header';
import Filter from '../PizzaMenu/Components/Filter';

const ShopCatalog = () => {
  
   return (
    <div className="Catalog-container">
       <Header />
       <Filter />
    </div>
   );
}


export default ShopCatalog;