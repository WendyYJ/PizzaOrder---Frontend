import React from "react";
import "../Style/SampleMenu.scss";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import availableSizes from "../../asset/icon/available_sizes.png";
import Counter from "../../PageLayout/Counter";
import PeriPeri from "../../asset/img/PeriPeri.png";
import {connect} from  'react-redux';

const SampleMenu = props => (
  <div className="sample_menu">
    <div className="pizza-sample">
      <img className="dot2" src={PeriPeri} alt="pizza" />
    </div>
    <div className="sample-info">
      <div className="sample_text">
        <h2>{props.pizzaName}</h2>
        <div className="five-star">
          <StarIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <StarIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <StarIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <StarIcon style={{ coloyr: "#D94F2B", fontSize: "20px" }} />
          <StarBorderIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <p style={{ fontSize: "14px" }}>{props.pizzaDesc}</p>
          <p style={{ fontSize: "14px" }}>AVAILABLE SIZES</p>
          <img src={availableSizes} alt="available-size" id="available-size" />

          <div className="clickCount">
            <Counter price = {props.price}
             Name = {props.PizzaName}
             handleClick = {props.handleClick}/>
          </div>
          <button className="addButton">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return{
      pizzaName:state.pizza.pizzaName,
      pizzaPrice:state.pizza.pizzaPrice,
      pizzaDesc:state.pizza.pizzaDesc,
      errorMessage:state.pizza.errorMessage,
      isLoading:state.pizza.isLoading,

  };
};



export default connect(mapStateToProps)(SampleMenu);