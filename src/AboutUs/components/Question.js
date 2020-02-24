import React from 'react';
import '.././Style/Information.scss';
import plus from '../../asset/img/plus.png';

const Question = () => {
    return (
        <div className="questioncontainer">

<h1>Frequently Asked Question</h1>
<h2>Here are the answers to the most common questions we receive</h2>

<div className="qu-container">
<div>
    <p>I can't find what I‘ m looking for. Where can I go to ask my question?</p>
    </div>
    <div>
    <img src={plus}></img>
    </div>
</div>

<div className="qu-container">
<div>
    <p>What is the minimum amount I have to order for delivery</p>
    </div>
    <div>
    <img src={plus}></img>
    </div>
</div>

<div className="qu-container">
<div>
    <p>How long will my delivery take?</p>
    </div>
    <div>
    <img src={plus}></img>
    </div>
</div>

<div className="qu-container">
<div>
    <p>The website came up with an error message when it was processing my payment, and I am not sure<br/>
    if my order whent through or not?</p>
    </div>
    <div>
    <img src={plus}></img>
    </div>
</div>

<div className="qu-container1">
<div>
    <p>How can I find nutritional information on products?</p>
    </div>
    <div>
    <img src={plus}></img>
    </div>
</div>

            </div>
    
        );



}



export default Question;