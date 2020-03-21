import React, { Component } from 'react';
import { connect } from 'react-redux';
import util from '../../utils/util';
import { Link } from 'react-router-dom';
import {updateCart as updateCartAction} from '../../redux/actions/pizzaActions';

class CartTotal extends React.Component {
    constructor(props) {
        super(props);    
    }

    changePizzas = () =>{
        this.props.products.map(
            p => {
                this.props.updateCart(p.product.id,p.quantity);          
        });  
    }

    render() {
   
        return (
            <div className = "cart-subtotal">
                <span className = "cart-subtotal__title">Cart</span>
                <div className = "float-cart__btn">
                    <span className = "cart-subtotal__sum">Order Total:  ${util.formatPrice(this.props.totalPrice)}</span>
                    <div className="float-cart__viewbtn" onClick = {() => this.changePizzas()}>
                        UPDATE CART  
                    </div>
                    <Link className="float-cart__buybtn">
                        PROCEED TO CHECKOUT 
                    </Link>
                </div>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return{
      pizza:state.pizza.pizza,
      selectedPizzas: state.pizza.selectedPizzas,
    };
  };
  
const mapDispatchToProps= dispatch => ({
    updateCart: (id,quantity) => dispatch (updateCartAction(id,quantity)) 
});

export default connect(mapStateToProps,mapDispatchToProps)(CartTotal);

