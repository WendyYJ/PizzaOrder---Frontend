import React from "react";

import "../Style/Filter.scss";

function IngredientCard(props) {
  return (
    <div>
      <input onChange={props.onChange} type="checkbox" id={props.id} />

      <label htmlFor={props.id}>{props.ingredientName}</label>
    </div>
  );
}

export default IngredientCard;
