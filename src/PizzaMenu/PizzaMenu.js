import React, { Fragment } from 'react';
import './Style/RelatedProduct.scss';
import './Style/SampleMenu.scss';
import Filter from './Components/Filter';
import LinkHeader from '../PageLayout/Header/LinkHeader';


const PizzaMenu = () => (
  <div className="Catalog-container">
    <>
      <LinkHeader headername="Pizza Menu" />
      <Filter />
    </>
  </div>
);

export default PizzaMenu;
