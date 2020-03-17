import React from 'react';
import './Style/TopHeader.scss';
import '../ShoppingCart/ShoppingCart.scss';
import { Link } from 'react-router-dom';
import { MYACCOUNT_URL, CHECKOUT_URL } from '../routes/URLMap';
import ShippingForm from './ShippingForm';

const Cart = () => (
  <div className="cart-container">
    <div className="shoppingCart">
      <ul>
        <div className="ordered1">
          <div>
            <span className="dot1">
              <p className="mark1">x</p>
            </span>
          </div>
          <div className="text">
            <h4 className="order-title">Moorish Lamb</h4>
            <p className="size">SIZE: Large</p>
            <div className="horizonbar-Four" />

            <div className="total_price1">
              <p className="price1">$ 19.00</p>
              <p>
                <span className="qty1"> 1 </span>
              </p>
              <p className="totalprice1">$19.00</p>
            </div>
          </div>
        </div>

        <div className="ordered1">
          <div>
            <span className="dot1">
              <p className="mark1">x</p>
            </span>
          </div>
          <div className="text">
            <h4 className="order-title">Vegetarian Supreme</h4>
            <p className="size">SIZE: Jumbo</p>

            <div className="total_price1">
              <p className="price1">$ 34.00</p>
              <p>
                <span className="qty1"> 1 </span>
              </p>
              <p className="totalprice1">$34.00</p>
            </div>
          </div>
        </div>

        <div className="ordered1">
          <div>
            <span className="dot1">
              <p className="mark1">x</p>
            </span>
          </div>
          <div className="text">
            <h4 className="order-title">Spiced Pumpkin</h4>
            <p className="size">SIZE: Small</p>

            <div className="total_price1">
              <p className="price1">$ 26.00</p>
              <p>
                <span className="qty1"> 1 </span>
              </p>
              <p className="totalprice1">$26.00</p>
            </div>
          </div>
        </div>
      </ul>
    </div>

    <div className="total">
      <h2>Cart Totals</h2>
      <p>
        CART SUBTOTAL
        <span>$79.00</span>
      </p>
      <p>
        SHIPPING AND HANDLING
        <span>Free Shipping</span>
      </p>
      {' '}
      <br />
      <h3>
        Order Total
        <span>$79.00</span>
      </h3>
      <button className="viewCart-btn">
        <Link
          style={{ color: '#FDBC2C', textDecoration: 'none' }}
          to={MYACCOUNT_URL}
        >
          UPDATE CART
        </Link>
      </button>
      <br />
      <button className="checkout-btn">
        <Link
          style={{ color: 'black', textDecoration: 'none' }}
          to={CHECKOUT_URL}
        >
          PROCEED TO CHECKOUT
        </Link>
      </button>
    </div>
    <ShippingForm />
  </div>
);

export default Cart;
