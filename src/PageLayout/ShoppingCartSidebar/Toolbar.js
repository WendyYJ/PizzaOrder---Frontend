import React from 'react';
import './Toolbar.scss';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      
      <div className="toolbar__title">Cart Totals</div>
      <div className="toolbar_navigation-items">
        <ul> 
          <li><a href="/">Moorish Lamb</a></li>
          <li><a href="/">Vegetarian Supreme</a></li>
          <li><a href="/">Spiced Pumpkin</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;