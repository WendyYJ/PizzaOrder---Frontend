import React from 'react';
import { connect } from 'react-redux';
import Title from  './Component/Title';
import FourthHeader from '../PageLayout/Header/FourthHeader';
import CartForm from './Component/CartForm';
import CartTotal from './Component/CartTotal';
import Footer from '../PageLayout/Footer/Footer';
import {updateCart as updateCartAction} from '../redux/actions/pizzaActions';
import './ShoppingCart.scss';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changedProduct:[],
    }
  }

  removeProduct = product => {
    const index = this.props.selectedPizzas.findIndex(p => p.id === product.id);
        if (index >= 0) {
            this.setState( this.props.selectedPizzas.splice(index, 1));
        }
  }; 

  addQuantity = (product,number) => {
    if(number != "") {
      this.state.changedProduct.push({product:product,quantity:Number(number)});
    }
  }

  render() {
    let totalQuantity = 0;
    let totalPrice =0;
    const products = this.props.selectedPizzas.map(p => {
      totalQuantity = totalQuantity + p.quantity;
      totalPrice = totalPrice + p.price * p.quantity;
      return (
              <CartForm product={p} key={p.id} addQuantity = {this.addQuantity} removeProduct = {this.removeProduct} />
            );
      });
    return(
        <React.Fragment>
          <FourthHeader headername="Shopping Cart" />
          <div className = "shopping__container">
            <div className="shopping__form">
              {products.length 
                && <Title /> }
              {products}
              {!products.length && (
                  <p className="shopping__form-empty">
                            Add some products in the bag <br />
                            :)
                  </p>
              )}
            </div>
            <CartTotal products = {this.state.changedProduct} totalPrice = {totalPrice} />
          </div>
          <Footer /> 
        </React.Fragment>
    );
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

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);
