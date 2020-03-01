import React from 'react';
import '.././PageLayout/Style/PageStyle.scss';
import Header from '../PageLayout/Header/Header';
import FourthHeader from '../PageLayout/Header/FourthHeader'
import Cart from '../PageLayout/Cart';


const ShoppingCart = () => {
  return (
    <div className="shoppingCart-container">
      <Header />
      <FourthHeader headername={"Shopping Cart"} style={{width: "100%"}}/>
     <div className="shoppingCart1">
     <div className="horizonbar-Three">
        <p>PRODUCT</p>
        <p>PRICE</p>
        <p>QTY</p>
        <p>TOTAL</p>
      </div>
        <Cart />
    </div>
    </div>

  );
}

export default ShoppingCart;