import React, { Fragment } from 'react';
import './Style/RelatedProduct.scss';
import './Style/SampleMenu.scss';
import Filter from './Components/Filter';
import LinkHeader from '../PageLayout/Header/LinkHeader';


const PizzaMenu = () => (
  <div className="Catalog-container">
    <Fragment>
      <LinkHeader headername="Pizza Menu" />
      <Filter />
    </Fragment>
  </div>
);

export default PizzaMenu;
