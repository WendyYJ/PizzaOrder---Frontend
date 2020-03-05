import React from 'react';



import '.././Style/Filter.scss';

const IngredientCard = props => {
    return (
      
        <div>
        <input type="checkbox" id="cb_0" ></input>
        <label for="cb_0">
        {props.ingredientName}
        </label>
     </div>
     
    );
};

export default IngredientCard;