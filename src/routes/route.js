import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import PizzaMenu from "../PizzaMenu/PizzaMenu";
import SampleId from "../PizzaMenu/SampleId";
import PizzaBuilder from "../PizzaBuilder/PizzaBuilder";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Checkout from "../Checkout/Checkout";

import {
  HOME_URL,
  PIZZAMENU_URL,
  PIZZABUILDER_URL,
  SHOPPINGCART_URL,
  ABOUTUS_URL,
  CONTACT_URL,
  CHECKOUT_URL
} from "./URLMap";

const Routes = () => (
  <BrowserRouter>
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
    </Switch>
  </BrowserRouter>
);

export default Routes;
