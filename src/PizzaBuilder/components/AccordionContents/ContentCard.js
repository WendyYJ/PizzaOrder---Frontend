import React, { useState } from 'react';
import './ContentCard.scss';

const ContentCard = props =>{
   const [setSelected, setSelectedState] = useState('');

    
    function toggleSelection(){
        setSelectedState(
            setSelected === '' ? 'card-selected' : ''
        )
    }
        

    return(
            <div className={`content`} id={`${setSelected}`} onClick={toggleSelection} >
                <img className='content__img' src ={props.image} alt={props.name}/>
                <h3 className='content__name'>{props.name}</h3>
                <p className='content__description'>  
                   {
                       setSelected === '' ?
                            props.description
                   : <div className='selected-tick'> &#x2714; </div>
                   }  
                </p>
                <p className='content__price'>${props.price}</p>
            </div>
        )
    
   
}
export default ContentCard;