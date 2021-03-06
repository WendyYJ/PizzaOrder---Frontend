import React, { Fragment } from 'react';
import './MenuSidebar.scss';

const MenuToggle = (props) => (
  <>
    <button id="menu-toggle" onClick={props.click}>
      &#8801;
    </button>
  </>
);

export default MenuToggle;
