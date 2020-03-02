import React from 'react';
import orangeCircle from '../../asset/img/orangecircle.png'
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '.././Style/Filter.scss';

const PizzaCard = props => {
    return (
      
                <Card as={Link} to={props.to} className="cardcontainer">
                    
                <div className="circlecontainer">
                <img src={orangeCircle}></img>
                </div>

                <div className="contentcontainer">
               <h2>{props.pizzaName}</h2> 
         
                    <p>{props.pizzaDescription}</p>
                   <h3> ${props.pizzaPrice}</h3>
                   </div>
                   </Card>
     
    );
};

export default PizzaCard;