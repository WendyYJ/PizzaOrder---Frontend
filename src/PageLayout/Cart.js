import React from 'react';
import { Link } from 'react-router-dom';
import { MYACCOUNT_URL, CHECKOUT_URL } from '../Route/URLMap';
import '.././PageLayout/Style/PageStyle.scss';

function Cart() {
  return (
    <div className="cart-container">
    
     <div className="cart">
      <h2>Cart Totals</h2>
        <ul>
          
          <div className="ordered1">
            <div>
               <span className="dot"><p>x</p></span>
              </div>
              <div className="text">
                <h4>Moorish Lamb</h4>
                <p>SIZE: Large</p>
                <p><span>1 x</span> $19.00</p>
              </div>
          </div><br></br>
            
            <div className="ordered1">
              <div>
               <span className="dot"><p>x</p></span>
              </div>
              <div className="text">
                <h4>Vegetarian<br></br>Supreme</h4>
                <p>SIZE: Jumbo</p>
                <p><span>1 x</span> $34.00</p>
              </div>
            </div>
          
            <div className="ordered1">
              <div>
               <span className="dot"><p>x</p></span>
              </div>
              <div className="text">
                <h4>Spiced<br></br> Pumpkin</h4>
                <p>SIZE: Small</p>
                <p><span>1 x</span> $26.00</p>
              </div>
            </div>

           
          </ul><br></br>
          
          <h3>Order Total <span>$79.00</span></h3>
          <button className="viewCart-btn"><Link style={{color: "#FDBC2C", textDecoration: "none"}}to={MYACCOUNT_URL}>VIEW SHOPPING CART</Link></button><br></br>
          <button className="checkout-btn"><Link style={{color: "black", textDecoration: "none"}}to={CHECKOUT_URL}>CHECKOUT</Link></button>  
     </div>
    </div>
  

  );
}

export default Cart;