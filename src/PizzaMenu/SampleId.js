import React from "react";
import ".././PageLayout/Style/TopHeader.scss";
import ".././PageLayout/Style/Horizonbar.scss";
import "../PizzaMenu/Style/RelatedProduct.scss";
import "../PizzaMenu/Style/SampleMenu.scss";
import ThirdHeader from "../PageLayout/Header/ThirdHeader";
import HorizonBar from "../PageLayout/HorizonBar";
import SampleMenu from "./Components/SampleMenu";
import ReviewForm from "../PageLayout/ReviewForm";
import RelatedProduct from "./Components/RelatedProduct";
import { fetchPizzaById } from "../api/pizza";
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";
import ShoppingCartSidebar from "../PageLayout/ShoppingCartSidebar/ShoppingCartSidebar";
import Footer from "../PageLayout/Footer/Footer";
import {connect} from  'react-redux';
import {loadPizza as loadPizzaAction} from '../redux/actions/pizzaActions';

class SampleId extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     pizza: {},
  //     error: null,
  //     isLoading: false
  //   };
  // }

  
  async componentDidMount(){
    const pizzaId = this.props.match.params.SampleId;
    this.props.loadPizza(pizzaId);
  
  
  }

  // loadPizza = pizzaId =>
  //   this.setState({ isLoading: true }, () => {
  //     fetchPizzaById(pizzaId)
  //       .then(pizza => this.setState({ pizza, isLoading: false }))
  //       .catch(error => this.setState({ error }));
  //   });

   
  render() {
    return (
      <div className="MenuMain-container">
       
        <PizzamenuSidebar />
        <ShoppingCartSidebar />

        <ThirdHeader
          headername={"Pizza Menu"}
          headername2={this.props.PizzaName}
        />

        <HorizonBar className="horizonbar" />
        <SampleMenu
          pizzaname={this.props.PizzaName}
          description={this.props.PizzaDesc}
          price={this.props.PizzaPrice}
        
        />

        <div className="horizonbar-Two">
          <p>DESCRIPTION</p>
          <p>NUTRITIONAL INFO</p>
          <p>ORDER DELIVERY</p>
          <p className="active">REVIEWS(4)</p>
        </div>
        <ReviewForm />
        <RelatedProduct />
        <Footer />
      </div>
    );
  }
}





const mapDispatchToProps= dispatch => ({
  loadPizza:id => dispatch(loadPizzaAction(id)),
});

const mapStateToProps = state => {
  return{
    
      errorMessage:state.pizza.errorMessage,
      isLoading:state.pizza.isLoading,

  };
};


export default connect(mapStateToProps,mapDispatchToProps)(SampleId);
