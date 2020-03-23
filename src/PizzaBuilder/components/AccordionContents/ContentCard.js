import React from 'react';
import './ContentCard.scss';


const ContentCard = (props) => {
    
    return(
        <div className='content'>
            <img className='content__img' src ={props.image} alt={props.name}/>
            <h3 className='content__name'>{props.name}</h3>
            <p className='content__description'>{props.description}</p>
            <p className='content__price'>$ {props.price}</p>
               
        </div>
    )

}
export default ContentCard;