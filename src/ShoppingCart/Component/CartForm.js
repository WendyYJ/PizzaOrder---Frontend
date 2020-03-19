import React, { Component } from 'react';
import util from '../../utils/util';
import Thumb from '../../Navigation/Component/Thumb';
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
      const classes = ['cart-item'];
    
      if (!!this.state.isMouseOver) {
          classes.push('cart-item--mouseover');
      }
      return (

          <div className={classes.join(' ')}>
            <div className = "cart-item__product">
                <div
                    className="cart-item__del"
                    onMouseOver={() => this.handleMouseOver()}
                    onMouseOut={() => this.handleMouseOut()}
                    onClick={() => removeProduct(product)}
                />
                <Thumb
                    classes="cart-item__thumb"
                    src = {product.image}
                    alt = {product.pizzaName}
                />
                <div>
                    <p className="title">{product.pizzaName}</p>
                    <p className="desc">
                        <span>SIZE: </span>{`${product.size}`} <br />
                    </p>
               </div>
            </div>    
          
                <div className="cart-item__price">  
                    {`${product.currencyFormat}${util.formatPrice(
                        product.price
                    )}`} 
               </div>         
                <div className = "cart-item__quantity"> 
                    <input value = {product.quantity} name = "quantity" size = "2" className = "cart-item__quantityInput" />
                </div>  
                <div className = "cart-item__total">
                {`${product.currencyFormat}${util.formatPrice(
                        product.price * product.quantity
                )}`} 
                </div>       
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
  

