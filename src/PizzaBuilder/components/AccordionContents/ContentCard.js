import React, { useState } from 'react';
import './ContentCard.scss';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const ContentCard = props =>{
   const [setSelected, setSelectedState] = useState('');

    
    function toggleSelection(){
        setSelectedState(
            setSelected === '' ? 'card-selected' : ''
        )
    }
        

    

    
        return(
            <div className={`content`} onClick={toggleSelection} >
                <img className='content__img' src ={props.image} alt={props.name}/>
                <h3 className='content__name'>{props.name}</h3>
                <p className='content__description'>  
                   {
                       setSelected === '' ?
                            props.description
                   : <div className={`${setSelected}`}> &#x2714; </div>
                   }  
                </p>
                <p className='content__price'>${props.price}</p>
            </div>
        )
    
   
}
export default ContentCard;