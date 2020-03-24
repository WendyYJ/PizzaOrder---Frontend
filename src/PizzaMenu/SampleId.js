import React from "react";
//import ".././PageLayout/Style/TopHeader.scss";
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

  
  async componentDidMount(){
    const pizzaId = this.props.match.params.SampleId;
    this.props.loadPizza(pizzaId);
  }

   
  render() {
    return (
      <div className="MenuMain-container">
       
        <ThirdHeader headername={"Pizza Menu"}/>

        <HorizonBar className="horizonbar" />
        <SampleMenu/>

        <div className="horizonbar-Two">
          <p>DESCRIPTION</p>
          <p>NUTRITIONAL INFO</p>
          <p>ORDER DELIVERY</p>
          <p className="active">REVIEWS(4)</p>
        </div>
        <div>
          <ReviewForm />
        </div>
        <div className="relatedProduct-outer">
       
          <RelatedProduct />
        </div>
        <div>
         <Footer />
        </div>
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
