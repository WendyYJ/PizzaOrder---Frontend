import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PizzaMenu from '../PizzaMenu/PizzaMenu';
import ShopCatalog from '../PizzaMenu/ShopCatalog';
import PizzaBuilder from '../PizzaBuilder/PizzaBuilder';

import {
    HOME_URL,
    PIZZAMENU_URL,
    SHOPCATALOG_URL,
    PIZZABUILDER_URL
  
} from './URLMap';


const Routes = () => {
    return (
      
      <BrowserRouter>
        <Switch>
           <Redirect exact from="/" to={HOME_URL} />
           <Route exact path={PIZZAMENU_URL} component={PizzaMenu} />
           <Route exact path={SHOPCATALOG_URL} component={ShopCatalog} />
           <Route exact path={PIZZABUILDER_URL} component={PizzaBuilder} /> 
           
       </Switch>
      </BrowserRouter>
    
    );
}

export default Routes;