import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PizzaMenu from '../PizzaMenu/PizzaMenu';
import ShopCatalog from '../PizzaMenu/ShopCatalog';
import PizzaBuilder from '../PizzaBuilder/PizzaBuilder';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import AboutUs from '../AboutUs/AboutUs';
import MenuMain from '../PizzaMenu/MenuMain';

import {
    HOME_URL,
    PIZZAMENU_URL,
    PIZZAMENUMAIN_URL,
    SHOPCATALOG_URL,
    PIZZABUILDER_URL,
    SHOPPINGCART_URL,
    ABOUTUS_URL
} from './URLMap';


const Routes = () => {
    return (
      
      <BrowserRouter>
        <Switch>
           <Redirect exact from="/" to={HOME_URL} />
           <Route exact path={PIZZAMENU_URL} component={PizzaMenu} />
           <Route exact path={SHOPCATALOG_URL} component={ShopCatalog} />
           <Route exact path={PIZZABUILDER_URL} component={PizzaBuilder} /> 
           <Route exact path={SHOPPINGCART_URL} component={ShoppingCart} />
           <Route exact path={ABOUTUS_URL} component={AboutUs} />
           <Route exact path={PIZZAMENUMAIN_URL} component={MenuMain} />
       </Switch>
      </BrowserRouter>
    
    );
}

export default Routes;