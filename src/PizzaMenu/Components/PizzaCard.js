import React from 'react';
import orangeCircle from '../../asset/img/orangecircle.png'
import { Link } from 'react-router-dom';
import '.././Style/Filter.scss';

const PizzaCard = props => {
    return (
      
                <div className="cardcontainer">
                    
                <div className="circlecontainer">
                <img src={orangeCircle}></img>
                </div>

                <div className="contentcontainer">
               <h2>{props.pizzaName}</h2> 
         
                    <p>{props.pizzaDescription}</p>
                   <h3> ${props.pizzaPrice}</h3>
                   </div>
            </div>
     
    );
};

export default PizzaCard;