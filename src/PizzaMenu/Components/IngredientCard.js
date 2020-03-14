import React from "react";

import "../Style/Filter.scss";

function IngredientCard(props) {
  return (
    <div className="ingredientcardcontainer">
      <div className="inputcontainer">
      <input onChange={props.onChange} type="checkbox" id={props.id} />
      </div>
      <div className="labelcontainer">
      <label htmlFor={props.id}>{props.ingredientName}</label>
      </div>
    </div>
  );
}

export default IngredientCard;
