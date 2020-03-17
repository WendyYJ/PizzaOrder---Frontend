import React, { Component } from 'react';
import util from '../../utils/util';
import Thumb from './Thumb';

class CartProduct extends Component { 
    constructor(props) {
        super(props);
        this.state ={
            isMouseOver: false
        }
    }
    handleMouseOver = () => {
        this.setState({ isMouseOver: true });
      };
    
    handleMouseOut = () => {
        this.setState({ isMouseOver: false });
    };

    render() {
      const { product, removeProduct } = this.props;
    
      const classes = ['shelf-item'];
    
      if (!!this.state.isMouseOver) {
          classes.push('shelf-item--mouseover');
      }
      return (
          <div className={classes.join(' ')}>
            <div
              className="shelf-item__del"
              onMouseOver={() => this.handleMouseOver()}
              onMouseOut={() => this.handleMouseOut()}
              onClick={() => removeProduct(product)}
            />
            <Thumb
              classes="shelf-item__thumb"
              src = {product.image}
              alt = {product.pizzaName}
            />    
            <div className="shelf-item__details">
              <p className="title">{product.pizzaName}</p>
              <p className="desc">
                <span>SIZE: </span>{`${product.size}`} <br />
              </p>
              <div className="shelf-item__price">
                <p>
                  <span className = "price"> {product.quantity} x </span>
                  {`${product.currencyFormat}${util.formatPrice(
                      product.price
                  )}`}
                  </p>
              </div>
            </div>
            <div className="clearfix" />
            </div>
        );
      }
    }
    
    export default CartProduct;