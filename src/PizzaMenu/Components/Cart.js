import React from 'react';
import { Link } from 'react-router-dom';
import { MYACCOUNT_URL, CHECKOUT_URL } from '../../Route/URLMap';
import '.././Style/pizzamenu.scss';

function Cart() {
  return (
    <div className="cart-container">
     <cart>
      <h2>Cart Totals</h2>
          <ul>
          <div class="row">
            <div class="col-sm-6">
               <span class="dot"></span>
               <div class="col-sm-6">
                <h4>Moorish Lamb</h4>
                <p>SIZE: Large</p>
                <p><span>1 x</span> $19.00</p>
              </div>
             </div>
          
            <li>
              <div>
                <i className="fas fa-circle" />
                <h4>Vegetarian<br></br>Supreme</h4>
                <p>SIZE: Jumbo</p>
                <p><span>1 x</span> $34.00</p>
              </div>
            </li>
            <li>
              <div>
                <i className="fas fa-circle" />
                <h4>Spiced<br></br> Pumpkin</h4>
                <p>SIZE: Small</p>
                <p><span>1 x</span> $26.00</p>
              </div>
            </li>
           </div>
          </ul><br></br>

          <h3>Order Total <span>$79.00</span></h3>
          <button className="viewCart-btn"><Link style={{color: "#FDBC2C", textDecoration: "none"}}to={MYACCOUNT_URL}>VIEW SHOPPING CART</Link></button><br></br>
          <button className="checkout-btn"><Link style={{color: "black", textDecoration: "none"}}to={CHECKOUT_URL}>CHECKOUT</Link></button>
     </cart>
    </div>

  );
}

export default Cart;