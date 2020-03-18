import React, { Component} from 'react';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import util from '../../utils/util';
import '../Style/ShoppingCart.scss';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false,
            isLoading:false, 
        }
    }
    openFloatCart = () => {
        this.setState({ isOpen: true });
    };
    
      closeFloatCart = () => {
        this.setState({ isOpen: false });
    };

    removeProduct = product => {
        const index = this.props.selectedPizzas.findIndex(p => p.id === product.id);
            if (index >= 0) {
                this.setState( this.props.selectedPizzas.splice(index, 1));
            }
    };   

    proceedCheckout = (quantity,price) => {
        if(quantity == 0) {
            alert('Add some product in the bag');
        } else {
            alert("total price is: " + price);// could use semantic ui message box to lead to checkout page
        }
    }

    render() { 
        let classes = ['float-cart'];
        let totalQuantity = 0;
        let totalPrice = 0;
        const products = this.props.selectedPizzas.map(p => {
            totalQuantity = totalQuantity + p.quantity;
            totalPrice = totalPrice + p.quantity * p.price;
            return (
                <CartProduct product={p} key={p.id} removeProduct = {this.removeProduct}/>
            );
        });
        if (!!this.state.isOpen) {
          classes.push('float-cart--open');
        }
        return(
                <div className={classes.join(' ')}>
                    {this.state.isOpen && (
                    <div className = "" onClick={() => this.closeFloatCart()}>
                    <span className="bag bag-close">
                        <span className="bag__quantity">
                            { totalQuantity }
                        </span>
                    </span>
                </div>
                )}
                {!this.state.isOpen && (
                    <span
                        onClick={() => this.openFloatCart()}
                        className="bag bag--float-cart-closed"
                    >
                        <span className="bag__quantity">{totalQuantity}</span>
                    </span>
                )}

                <div className="float-cart__content">
                    <div className="float-cart__header">
                        <span className="header-title">Cart Totals</span>
                    </div>

                    <div className="float-cart__shelf-container">
                        { products }
                        {!products.length && (
                            <p className="shelf-empty">
                                Add some products in the bag <br />
                                :)
                            </p>
                        )}       
                        <div className = "float-cart__total">
                            <span>OrderTotal:</span>
                            <span>${ util.formatPrice(
                                      totalPrice
                                    )}
                            </span>         
                        </div> 
                    </div>           
                    <div className="float-cart__footer">  
                        <div className="cart-btn">
                            View ShoppingCart
                        </div>
                        <div className="buy-btn" onClick={() => this.proceedCheckout(totalQuantity,totalPrice)}>
                            Checkout
                        </div>
                    </div>          
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

export default connect(mapStateToProps)(ShoppingCart);
