import React, { Component } from 'react';
import util from '../../utils/util';
import Thumb from './Thumb';
import { connect } from 'react-redux';

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
              alt = {product.key}
            />    
            <div className="shelf-item__details">
              <p className="title">{product.key}</p>
              <p className="desc">
                <span>SIZE: </span>{`${product.size}`} <br />
              </p>
              <div className="shelf-item__price">
                <p>
                  <span className = "price"> {this.props.quantity} x </span>
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
    
    const mapStateToProps = state => {
      return{
          pizza:state.pizza.pizza,
          selectedPizzas: state.pizza.selectedPizzas,    
      };
    };
  export default connect(mapStateToProps)(CartProduct);
  
