import React, { Fragment } from 'react';
import './ShoppingCart.scss';
import FourthHeader from '../PageLayout/Header/FourthHeader';
import Cart from '../PageLayout/Cart';
import PizzamenuSidebar from '../PageLayout/PizzamenuSidebar/PizzamenuSidebar';
import ShoppingCartSidebar from '../PageLayout/ShoppingCartSidebar/ShoppingCartSidebar';
import Footer from '../PageLayout/Footer/Footer';


const ShoppingCart = () => (
  <div className="shoppingCart-container">
    <>
      <ShoppingCartSidebar />
      <PizzamenuSidebar />
      <FourthHeader headername="Shopping Cart" style={{ width: '100%' }} />
      <div className="shoppingCart1">
        <div className="horizonbar-Three">
          <p>PRODUCT</p>
          <span className="price">
            <p>PRICE</p>
          </span>
          <p>QTY</p>
          <p>TOTAL</p>
        </div>
        <Cart />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
    <div />
  </div>
);

export default ShoppingCart;
