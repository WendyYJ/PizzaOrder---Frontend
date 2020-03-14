import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import orangeCircle from "../../asset/img/orangecircle.png";
import "../Style/Filter.scss";

const PizzaCard = props => (
  <Card as={Link} to={props.to} className="cardcontainer">
    <div className="circlecontainer">
      <img src={orangeCircle} />
    </div>

    <div className="contentcontainer">

    <div className="pizzanamecontainer">

      <h2>{props.pizzaName}</h2>
      </div>

      <div className="pizzadescriptioncontainer">
      <p>{props.pizzaDescription}</p>
      </div>
      <div className="pizzapricecontainer">
      <h3> ${props.pizzaPrice}</h3>
      </div>
    </div>
  </Card>
);

export default PizzaCard;
