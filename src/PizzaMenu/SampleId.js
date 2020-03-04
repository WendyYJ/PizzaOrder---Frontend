import React, {Fragment, useState} from 'react';
import '.././PageLayout/Style/PageStyle.scss';
import Header from '../PageLayout/Header/Header';
import ThirdHeader from '../PageLayout/Header/ThirdHeader';
import HorizonBar from '../PageLayout/HorizonBar';
import SampleMenu from './Components/SampleMenu';
import ReviewForm from '../PageLayout/ReviewForm';
import RelatedProduct from './Components/RelatedProduct';
import {fetchPizzaById} from '../api/pizza'
import Sidebar from '../PageLayout/Sidebar';
import Toggle from '../PageLayout/Toggle';

class SampleId extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
        pizza: {},
        error: null,
        isLoading: false,
    };
}

componentDidMount() {
  const pizzaId = this.props.match.params.SampleId;
  this.loadCourse(pizzaId);
}

loadCourse = pizzaId => this.setState({ isLoading: true }, () => {
  fetchPizzaById(pizzaId)
      .then(pizza => this.setState({ pizza, isLoading: false }))
      .catch(error=>this.setState({error}));
});


  render() {
  return (
    <div className ="MenuMain-container">
      <Header />
      <ThirdHeader headername={"Pizza Menu"} headername2={this.state.pizza.PizzaName} />

      <HorizonBar className="horizonbar" />
      <SampleMenu
      pizzaname={this.state.pizza.PizzaName}
      description={this.state.pizza.Description}
      price={this.state.pizza.UnitPrice}
      />
     
      <div className="horizonbar-Two">
        <p>DESCRIPTION</p>
        <p>NUTRITIONAL INFO</p>
        <p>ORDER DELIVERY</p>
        <p className="active">REVIEWS(4)</p>
      </div>
        <ReviewForm />
        <RelatedProduct />
  
     </div>
  );
}
}


export default SampleId;