import React, { useState } from 'react';
import './ContentCard.scss';

const ContentCard = props =>{
    // const [descriptionIsShown, toggleisShown] = useState( true );
    // const [isSelected, toggleisSelected] = useState( false );
        
    // toggleisShown(
    //     descriptionIsShown === true ? false : true
    // )
        
    // toggleisSelected(
    //     isSelected === '' ? 'card-selected' : ''
    // )


    
        return(
            <div className={`content`}
            >
                <img className='content__img' src ={props.image} alt={props.name}/>
                <h3 className='content__name'>{props.name}</h3>
                <p className='content__description'>
                    
                        {props.description}
                       
                </p>
                <p className='content__price'>$ {props.price}</p>
            </div>
        )
    
   
}
export default ContentCard;