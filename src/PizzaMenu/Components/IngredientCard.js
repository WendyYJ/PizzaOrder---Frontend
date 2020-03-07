import React from "react";

import "../Style/Filter.scss";

function IngredientCard(props) {
  return (
    <div>
      <input
        onChange={props.filterIngredient}
        type="checkbox"
        id={props.ingredientId}
      />

      <label htmlFor={props.key}>{props.ingredientName}</label>
    </div>
  );
}

export default IngredientCard;
