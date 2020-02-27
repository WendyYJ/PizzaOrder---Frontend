import React from 'react';
import '.././PageLayout/Style/PageStyle.scss';
import Header from '../PageLayout/Header/Header';
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader'


const ShoppingCart = () => {
  return (
    <div>
      <Header />
      <SecondaryHeader headername={"Shopping Cart"} style={{width: "100%"}}/>

    </div>

  );
}

export default ShoppingCart;