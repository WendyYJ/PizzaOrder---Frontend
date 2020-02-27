import React from 'react';  
import circle1 from '../../asset/img/circle1.png';
import circle2 from '../../asset/img/circle2.png';
import circle3 from '../../asset/img/circle3.png';
import circle4 from '../../asset/img/circle4.png';
import circle5 from '../../asset/img/circle5.png';
import circle6 from '../../asset/img/circle6.png';

import '../Style/Footer.scss'

const Ingredient = () => {
    return (
        <div className="ingredientcontainer">

            <div className="circlebigcontainer">
            <div className="circlecontainer">
<img src={circle1}></img>
</div>
<div className="circlecontainer">
<img src={circle2}></img>
</div>
<div className="circlecontainer">
<img src={circle3}></img>
</div>
<div className="circlecontainer">
<img src={circle4}></img>
</div>
<div className="circlecontainer">
<img src={circle5}></img>
</div>

<div className="circlecontainer">
<img src={circle6}></img>
</div>

</div>

            </div>
    );
}


export default Ingredient;

