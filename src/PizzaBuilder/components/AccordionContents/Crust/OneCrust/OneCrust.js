import React, { useState } from 'react';

const OneCrust = (props) => {
    const [ selected, setSelectedState ] = useState('') ;
    function handleSelection(){
        setSelectedState(
            selected === '' ? "size-seleted" : ""
        )
    }
    return(
        <div>
        <div className={`crust-size ${selected}`} onClick={handleSelection}>
            <p className='crust-size-num'>
                {props.size}″
            </p>
        </div>
        <p className='crust-size-title'> 
            {props.title}
        </p>
        </div>
        

    )

}

export default OneCrust;