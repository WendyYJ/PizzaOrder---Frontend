import React, { Component} from 'react';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import util from '../../utils/util';
import { Link } from 'react-router-dom';
import { SHOPPINGCART_URL } from '../../routes/URLMap'
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

    render() {
       
        let classes = ['float-cart'];
        let totalQuantity = 0;
        let totalPrice = 0;
        const products = this.props.selectedPizzas.map(p => {
            totalQuantity = totalQuantity + p.quantity;
            totalPrice = totalPrice + p.quantity * p.price;
            return (
                <CartProduct product={p} quantity = {p.quantity} key={p.id} size={p.size} removeProduct = {this.removeProduct}/>
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
                    </div>         
                </div>

            <div className="float-cart__footer">                    
                <div className = "float-cart__total">
                    <span>OrderTotal:</span>
                        <span>
                            ${util.formatPrice(
                                totalPrice
                            )}
                        </span>         
                </div>
                <div className = "float-cart__btn">
                    <Link to = {SHOPPINGCART_URL} className="float-cart__viewbtn">
                        View ShoppingCart  
                    </Link>
                    <Link to = {SHOPPINGCART_URL} className="float-cart__buybtn">
                        Checkout  
                    </Link>
                </div>
            </div> 
        </div>
        );
    }   
}

const mapStateToProps = state => {
    return{
        selectedPizzas: state.pizza.selectedPizzas,
        pizzaSize: state.pizza.pizzaSize,
    };
  };
  
export default connect(mapStateToProps,null)(ShoppingCart);
