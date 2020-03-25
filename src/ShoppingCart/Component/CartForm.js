import React, { Component } from "react";
import util from "../../utils/util";
import Thumb from "../../Navigation/Component/Thumb";
import { connect } from "react-redux";

class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false,
      quantity: this.props.product.quantity
    };
  }
  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseOut = () => {
    this.setState({ isMouseOver: false });
  };

  handleQuantity = e => {
    const newQuantity = e.target.value;
    if (e.target.value === 0) {
    }
    if (e.target.value >= 0) {
      this.setState({ quantity: newQuantity });
    }
    this.props.addQuantity(this.props.product, newQuantity);
  };

  render() {
    const { product, removeProduct } = this.props;
    const classes = ["cart-item"];
    if (!!this.state.isMouseOver) {
      classes.push("cart-item--mouseover");
    }
    return (
      <div className={classes.join(" ")}>
        <div className="cart-item__product">
          <div
            className="cart-item__del"
            onMouseOver={() => this.handleMouseOver()}
            onMouseOut={() => this.handleMouseOut()}
            onClick={() => removeProduct(product)}
          />
          <Thumb
            classes="cart-item__thumb"
            src={product.image}
            alt={product.key}
          />
          <div>
            <p className="title">{product.key}</p>
            <p className="desc">
              <span>SIZE: </span>
              {`${product.size}`}
            </p>
          </div>
        </div>
        <div className="cart-item__price">
          {`${product.currencyFormat}${util.formatPrice(product.price)}`}
        </div>
        <div className="cart-item__quantity">
          <input
            type="number"
            min="0"
            value={this.state.quantity}
            name="quantity"
            size="2"
            className="cart-item__quantityInput"
            onChange={e => this.handleQuantity(e)}
          />
        </div>
        <div className="cart-item__total">
          {`${product.currencyFormat}${util.formatPrice(
            product.price * this.state.quantity
          )}`}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPizzas: state.pizza.selectedPizzas
  };
};

export default connect(mapStateToProps)(CartProduct);
