import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import PizzaMenu from '../PizzaMenu/PizzaMenu';
import SampleId from '../PizzaMenu/SampleId';
import PizzaBuilder from '../PizzaBuilder';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Checkout from '../Checkout/Checkout';
import Login from '../auth/Login';
import MyAccount from '../auth/MyAccount';

import {
  HOME_URL,
  PIZZAMENU_URL,
  PIZZABUILDER_URL,
  SHOPPINGCART_URL,
  ABOUTUS_URL,
  CONTACT_URL,
  CHECKOUT_URL,
  LOGIN_URL,
  MYACCOUNT_URL,
} from './URLMap';

const Routes = () => (
    <Switch>
      <Redirect exact from="/" to={HOME_URL} />
      <Route exact path={HOME_URL} component={Homepage} />
      <Route exact path={PIZZAMENU_URL} component={PizzaMenu} />
      <Route exact path={`${PIZZAMENU_URL}/:SampleId`} component={SampleId} />
      <Route exact path={PIZZABUILDER_URL} component={PizzaBuilder} />
      <Route exact path={SHOPPINGCART_URL} component={ShoppingCart} />
      <Route exact path={ABOUTUS_URL} component={AboutUs} />
      <Route exact path={CONTACT_URL} component={Contact} />
      <Route exact path={CHECKOUT_URL} component={Checkout} />
      <Route exact path={LOGIN_URL} component={Login} />
      <Route exact path={MYACCOUNT_URL} component={MyAccount} />
    </Switch>
);

export default Routes;
