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
      <h2>{props.pizzaName}</h2>

      <p>{props.pizzaDescription}</p>
      <h3> ${props.pizzaPrice}</h3>
    </div>
  </Card>
);

export default PizzaCard;
