import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import orangeCircle from '../../asset/img/orangecircle.png';
import '../Style/Filter.scss';

const PizzaCard = (props) => (
  <Card as={Link} to={props.to} className="cardcontainer">
    <div className="circlecontainer">
      <img src={props.pizzaImage} />
    </div>



      <div className="pizzanamecontainer">

        <h2 className = "pizzaName">{props.pizzaName}</h2>
      </div>

      <div className="pizzadescriptioncontainer">
        <p className = "pizzaDescription">{props.pizzaDescription}</p>
      </div>
      <div className="pizzapricecontainer">
        <h3 className = "price">
         
          $
          {props.pizzaPrice}
        </h3>
      </div>

  </Card>
);

export default PizzaCard;
