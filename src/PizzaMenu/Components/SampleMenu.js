import React from "react";
import "../Style/SampleMenu.scss";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import availableSizes from "../../asset/icon/available_sizes.png";
import Counter from "../../PageLayout/Counter";
import PeriPeri from "../../asset/img/PeriPeri.png";

const SampleMenu = props => (
  <div className="sample_menu">
    <div className="pizza-sample">
      <img className="dot2" src={PeriPeri} alt="pizza" />
    </div>
    <div className="sample-info">
      <div className="sample_text">
        <h2> {props.pizzaname}</h2>
        <div className="five-star">
          <StarIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <StarIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <StarIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <StarIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <StarBorderIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <p style={{ fontSize: "14px" }}>{props.description}</p>
          <p style={{ fontSize: "14px" }}>AVAILABLE SIZES</p>
          <img src={availableSizes} alt="available-size" id="available-size" />
    
          <div className="clickCount">
            
            <Counter 
            price = {props.price} />
          </div>
          <button className="addButton">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
);

export default SampleMenu;
