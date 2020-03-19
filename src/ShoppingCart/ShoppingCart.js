/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import Title from  './Component/Title';
import FourthHeader from '../PageLayout/Header/FourthHeader';
import CartForm from './Component/CartForm';
import Footer from '../PageLayout/Footer/Footer';
import './ShoppingCart.scss';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  removeProduct = product => {
    const index = this.props.selectedPizzas.findIndex(p => p.id === product.id);
        if (index >= 0) {
            this.setState( this.props.selectedPizzas.splice(index, 1));
        }
  
  }; 

  render() {
    let totalQuantity = 0;
    const products = this.props.selectedPizzas.map(p => {
      totalQuantity = totalQuantity + p.quantity;
      return (
              <CartForm product={p} key={p.id} removeProduct = {this.removeProduct} itemPrice = {p.quantity * p.price} />
            );
      });
    return(
        <React.Fragment>
          <FourthHeader headername="Shopping Cart" />
          <div className="shopping__form">
            <Title />
            {products}
          </div>
          <div className="footer-container">
            <Footer />
          </div>
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

export default connect(mapStateToProps,null)(ShoppingCart);
