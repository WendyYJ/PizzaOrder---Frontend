import React, { Component } from "react";
import ".././PizzaMenu/Style/SampleMenu.scss";
import {countUp} from '../redux/actions/pizzaActions'
import {countDown} from '../redux/actions/pizzaActions'
import {connect} from  'react-redux';

function Counter (props) {

  

    
    return (
      <div className="counterButton">
          {props.sizeChose?
        <h3>${props.pizzaPriceSize* props.count}</h3>
      : <h3>${props.pizzaPrice * props.count}</h3>}
        <p style={{ fontSize: "14px", margin: "2px" }}>QUANTITY</p>
  
        <button className="decButton" onClick={props.countDown}>
          -
        </button>
        <span className="count">{props.count}</span>
        <button className="incButton" onClick={props.countUp}>
          +
        </button>

        
      </div>
    );
  }


const mapStateToProps= state => {
  return{
      pizzaPrice:state.pizza.pizzaPrice,
      pizzaPriceSize:state.pizza.pizzaPriceSize,
      count: state.pizza.count,
      sizeChose: state.pizza.sizeChose,

  };
};




const mapDispatchToProps= dispatch =>{
  return{
      countUp: () => dispatch(countUp()),
      countDown: () => dispatch(countDown()),
      

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);


