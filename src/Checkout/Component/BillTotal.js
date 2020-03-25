import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import util from '../../utils/util';
import '../Style/OrderDetails.scss';

class CartTotal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let totalPrice = 0;
    const products = this.props.selectedPizzas.map((p) => {
      totalPrice += p.quantity * p.price;
      return (
        <div className="order-products">
          <div className="order-details__list">
            <span className="order-details__name">
              {p.pizzaName}
              {' '}
            </span>
            <span className="order-details__quantity">
              x
              {p.quantity}
            </span>
          </div>
          <span className="order-details__price">
            $
            {util.formatPrice(p.price)}
          </span>
        </div>
      );
    });
    return (
      <div className="order-subtotal">
        <div className="order">
          <span className="order-subtotal__title">Order Total</span>
          <div className="order-details">
            <div className="order-details__title">
              <span className="order-details__name">PRODUCT</span>
              <span className="order-details__name">TOTAL</span>
            </div>
            <div className="order-details__summary">{products}</div>
          </div>
        </div>
        <div className="float-cart__btn">
          <span className="cart-subtotal__sum">
            Order Total: $
            {util.formatPrice(totalPrice)}
          </span>
          <div className="float-cart__viewbtn">PLACE ORDER</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedPizzas: state.pizza.selectedPizzas,
});
export default connect(mapStateToProps)(CartTotal);
