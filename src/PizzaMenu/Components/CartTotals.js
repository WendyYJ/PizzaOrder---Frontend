import React from 'react';

function CartTotals() {
  return (
    <cart>
      <h2>Cart Totals</h2>
          <ul>
            <li>
              <div>
                <i className="fas fa-circle" />
                <h4>Moorish Lamb</h4>
              </div>
            </li>
            <li>
              <div>
                <i className="fas fa-circle" />
                <h4>Vegetarian<br></br>Supreme</h4>
              </div>
            </li>
            <li>
              <div>
                <i className="fas fa-circle" />
                <h4>Spiced<br></br> Pumpkin</h4>
              </div>
            </li>
          </ul><br></br>

          <h3>Order Total <span>$79.00</span></h3>
          <button className="viewCart-btn">VIEW SHOPPING CART</button><br></br>
          <button className="checkout-btn">CHECKOUT</button>
    </cart>

  );
}

export default CartTotals;