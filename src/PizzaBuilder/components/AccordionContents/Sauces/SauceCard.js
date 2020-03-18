import React from 'react';
import './SauceCard.scss';


const SauceCard = (props) => {

    return(
        <div className='sauce'>
            <img className='sauce__img' src ={props.image} alt={props.name}/>
            <h3 className='sauce__name'>{props.name}</h3>
            <p className='sauce__description'>{props.description}</p>
            <p className='sauce__price'>$ {props.price}</p>
               
        </div>
    )

}

export default SauceCard;