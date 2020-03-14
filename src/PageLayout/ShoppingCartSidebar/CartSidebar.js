import React, { useState } from "react";
import "./CartSidebar.scss";
import { SHOPPINGCART_URL, CHECKOUT_URL } from "../../routes/URLMap";
import { Link } from "react-router-dom";

const CartSidebar = props => {
  const [sidebarClass, setSidebarClass] = useState(props.sidebar);

  const closeHandler = event => {
    event.preventDefault();
    setSidebarClass("sidebar close");
    /*
    setTimeout(() => {
      props.close();
    }, 1000);
    */
  };

  return (
    <div className={sidebarClass}>
      <div id="close" onClick={closeHandler} />

      <div className="cart-total">
        <ul className="cart">
          <h2 className="cart-title">Cart Totals</h2>
          <div className="ordered-list">
            <div>
              <span className="ordered-pizza">
                <p className="mark">x</p>
              </span>
            </div>
            <div className="cart-text">
              <h4 className="product-name">Moorish Lamb</h4>
              <p className="size">SIZE: Large</p>
              <div className="horizonbar-Four" />

              <div className="total_price">
                <p>
                  <span className="qty"> 1 x </span>
                </p>
                <p className="totalprice">$19.00</p>
              </div>
            </div>
          </div>

          <div className="ordered-list2">
            <div>
              <span className="ordered-pizza">
                <p className="mark">x</p>
              </span>
            </div>
            <div className="cart-text">
              <h4 className="product-name">Vegetarian Supreme</h4>
              <p className="size">SIZE: Jumbo</p>

              <div className="total_price">
                <p>
                  <span  className="qty"> 1 x </span>
                </p>
                <p className="totalprice">$34.00</p>
              </div>
            </div>
          </div>

          <div className="ordered-list3">
            <div>
              <span className="ordered-pizza">
                <p className="mark">x</p>
              </span>
            </div>
            <div className="cart-text">
              <h4 className="product-name">Spiced Pumpkin</h4>
              <p className="size">SIZE: Small</p>

              <div className="total_price">
                <p>
                  <span  className="qty"> 1 x </span>
                </p>
                <p className="totalprice">$26.00</p>
              </div>
            </div>
          </div>
        </ul>
      </div>

      <div className="order-total">
        <h2 className="order-title">
          Order Totals <span>$79.00</span>
        </h2>
        <button className="viewCart-button">
          <Link
            style={{ color: "#FDBC2C", textDecoration: "none" }}
            to={SHOPPINGCART_URL}
          >
            VIEW SHOPPING CART
          </Link>
        </button>
        <br />
        <button className="checkout-button">
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={CHECKOUT_URL}
          >
            CHECKOUT
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;