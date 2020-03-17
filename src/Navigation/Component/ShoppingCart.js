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
            cartProducts : [{ //just for testing. The data should be obtained from redux and API.
                id:"12345",
                pizzaName:"Prawn Pizza",
                image:"https://www.dominos.com.au/ManagedAssets/AU/product/P355/AU_P355_en_hero_3177.png?v-560733922",
                price:22,
                size:"Large",
                quantity:1,
                currencyFormat:'$',
                },
                {id:"12346",
                pizzaName:"Beef Pizza",
                image:"https://www.dominos.com.au/ManagedAssets/AU/product/P322/AU_P322_en_hero_3177.png?v693830719",
                price:25,
                size:"Jumbo",
                quantity:1,
                currencyFormat:'$',
                },
                {id:"12347",
                pizzaName:"Chicken Pizza",
                image:"https://www.dominos.com.au/ManagedAssets/AU/product/P223/AU_P223_en_hero_4055.jpg?v-233754517",
                price:18,
                size:"Small",
                quantity:2,
                currencyFormat:'$',
                }
            ],
        }
    }
    openFloatCart = () => {
        this.setState({ isOpen: true });
    };
    
      closeFloatCart = () => {
        this.setState({ isOpen: false });
    };

    removeProduct = product => {
        const index = this.state.cartProducts.findIndex(p => p.id === product.id);
        console.log(index);
            if (index >= 0) {
                this.setState( this.state.cartProducts.splice(index, 1));
                //updateCart(cartProducts);
            }
    };   

    // quantity, price is just for showing function. This is stored in redux.
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
    
        const products = this.state.cartProducts.map(p => {
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
                        <span className="bag__quantity">{totalQuantity}
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
                        {products}
                        {!products.length && (
                        <p className="shelf-empty">
                            Add some products in the bag <br />
                            :)
                        </p>
                        )}
                        
                        <div className = "float-cart__total">
                            <span>OrderTotal:</span>
                            <span>${util.formatPrice(
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

export default ShoppingCart;
