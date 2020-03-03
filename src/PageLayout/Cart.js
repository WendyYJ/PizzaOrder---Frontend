import React from 'react';
import { Link } from 'react-router-dom';
import { MYACCOUNT_URL, CHECKOUT_URL } from '../routes/URLMap';
import '.././PageLayout/Style/PageStyle.scss';
import ShippingForm from '../PageLayout/ShippingForm';

function Cart() {
  return (
    <div className="cart-container">
    
     <div className="cart">
        <ul>
          <div className="ordered1">
            <div>
               <span className="dot"><p>x</p></span>
              </div>
              <div className="text">
                <h4>Moorish Lamb</h4>
                <p>SIZE: Large</p>
              <div className="horizonbar-Four"></div>
              
              <div className="total_price">
                <p className="price">$ 19.00</p>
                <p><span> 1 </span></p>
                <p className="totalprice">$19.00</p>
              </div>
            </div>
          </div>
            
            <div className="ordered1">
              <div>
               <span className="dot"><p>x</p></span>
              </div>
              <div className="text">
                <h4>Vegetarian Supreme</h4>
                <p>SIZE: Jumbo</p>

                <div className="total_price">
                <p className="price">$ 34.00</p>
                <p><span> 1 </span></p>
                <p className="totalprice">$34.00</p>
              </div>
              </div>
            </div>
          
            <div className="ordered1">
              <div>
               <span className="dot"><p>x</p></span>
              </div>
              <div className="text">
                <h4>Spiced Pumpkin</h4>
                <p>SIZE: Small</p>

                <div className="total_price">
                <p className="price">$ 26.00</p>
                <p><span> 1 </span></p>
                <p className="totalprice">$26.00</p>
              </div>
              </div>
            </div>
          </ul>
        </div>

        <div className="total">
          <h2>Cart Totals</h2>
          <p>CART SUBTOTAL <span>$79.00</span></p>
          <p>SHIPPING AND HANDLING <span>Free Shipping</span></p> <br></br>
          <h3>Order Total <span>$79.00</span></h3>
          <button className="viewCart-btn"><Link style={{color: "#FDBC2C", textDecoration: "none"}}to={MYACCOUNT_URL}>UPDATE CART</Link></button><br></br>
          <button className="checkout-btn"><Link style={{color: "black", textDecoration: "none"}}to={CHECKOUT_URL}>PROCEED TO CHECKOUT</Link></button>  
        </div>

        <div className="shipping_method">
          <h3 className="shipping">Calculate Shipping</h3>
           <ShippingForm />
          <h3 className="promotion">Promotion Code</h3>
        </div>
     </div>
  );
}

export default Cart;