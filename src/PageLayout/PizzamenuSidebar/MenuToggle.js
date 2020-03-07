import React, {Fragment} from "react";
import './MenuSidebar.scss';

const MenuToggle = (props) => {
  return(
    <Fragment>
      <button id="toggle" onClick={props.click}>&#8801;</button>
    </Fragment>
  )
}

export default MenuToggle;