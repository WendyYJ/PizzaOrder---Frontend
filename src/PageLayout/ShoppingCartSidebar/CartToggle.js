import React, { Fragment } from 'react';
import './CartSidebar.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartToggle = (props) => (
  <>
    <button id="cart-toggle" onClick={props.click}>
      <ShoppingCartIcon
        style={{
          fontSize: 41,
          color: 'white',
          backgroundColor: '#FDBC2C',
          marginTop: '-1.3vh',
        }}
      />
    </button>
  </>
);

export default CartToggle;
