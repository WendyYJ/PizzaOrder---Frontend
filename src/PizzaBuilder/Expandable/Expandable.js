import React from 'react';
import Collapsible from 'react-collapsible';
import './Expandable.scss';


const Expandable = React.createClass({
    render:function(){ 
        
        
        return(
        <Collapsible trigger="Start here">
            <p> This is Collasible content.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
        
        </Collapsible>

    )
}



})

export default Expandable;

