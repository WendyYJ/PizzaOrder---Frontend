import React from 'react';
import './Crust.scss';
import OneCrust from './OneCrust/OneCrust';




function Crust() {
  const crusts = [ 
    { size:9,
      title:'Small'
    },
    { size:12,
      title:'Medium'
    },
    { size:14,
      title:'Large'
    },
    { size:16,
      title:'Jumbo'
    },
    { size:18,
      title:'Party Size'
    }
   ];


     return(
    
        <div className='crusts-container'>
         { crusts.map(eachSize =>
           <OneCrust 
            size={eachSize.size}
            title={eachSize.title}
           />
         ) 
          }
         
        </div>
    )

}


export default Crust;