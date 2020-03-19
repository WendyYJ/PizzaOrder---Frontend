import React, { useState } from 'react';
import './Crust.scss';



function Size() {


     return(
    
        <div className='crust'>
          <div className={`crust-size crust9 crust-selected`}>
            9″
          </div>
          <div className={`crust-size crust12` }>
            12″
          </div>
          <div  className={`crust-size crust14` }>
            14″
          </div>
          <div className={`crust-size crust16` } >
            16″
          </div>
          <div className={`crust-size crust18` }>
            18″
          </div>
        </div>
    )

}


export default Size;