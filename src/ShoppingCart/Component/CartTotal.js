import React, { Component } from 'react';
import util from '../../utils/util';
import { Link } from 'react-router-dom';
import { CHECKOUT_URL } from '../../routes/URLMap';

class CartTotal extends React.Component {
    constructor(props) {
        super(props);    
    }

   render() {
   
        return (
            <div className = "cart-subtotal">
                <span className = "cart-subtotal__title">Cart</span>
                <div className = "float-cart__btn">
                    <span className = "cart-subtotal__sum">Order Total:  ${util.formatPrice(this.props.totalPrice)}</span>
                    <div className="float-cart__viewbtn" onClick = {() => this.props.changePizzas()}>
                        UPDATE CART  
                    </div>
                    <Link className="float-cart__buybtn" to = {CHECKOUT_URL} >
                        PROCEED TO CHECKOUT 
                    </Link>
                </div>
           </div>
        )
    }
}

export default CartTotal;


