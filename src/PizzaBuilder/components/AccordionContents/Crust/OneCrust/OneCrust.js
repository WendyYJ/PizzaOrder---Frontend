import React, { useState } from 'react';
import './OneCrust.scss';

const OneCrust = (props) => {
    const [ selected, setSelectedState ] = useState('border') ;
    const [ allowSelection, setAllowSelection ] = useState(true);

    function handleSelection(){
       
            setSelectedState(
                selected === 'border' ? "seleted" : "border"
            )
          
        } 
        
    return(
        <div className={`crusts-size`} onClick={handleSelection}>
        <div id={`crust-size-${props.size}`} className={`crusts-size-${selected}`}>
                <p className='crusts-size-number'>
                    {props.size}″
                </p>
            </div>
        <p className='crusts-size-title'> 
            {props.title}
        </p>
        </div>
        

    )

}

export default OneCrust;