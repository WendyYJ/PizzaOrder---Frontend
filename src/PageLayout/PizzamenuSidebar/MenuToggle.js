import React, { Fragment } from "react";
import "./MenuSidebar.scss";

const MenuToggle = props => (
  <Fragment>
    <button id="menu-toggle" onClick={props.click}>
      &#8801;
    </button>
  </Fragment>
);

export default MenuToggle;