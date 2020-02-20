import React from 'react';
import { NavLink} from 'react-router-dom';
import { PIZZAMENU_URL, HOME_URL, PIZZABUILDER_URL, 
  BLOG_URL, ABOUTUS_URL, PAGES_URL, CONTACT_URL, 
  LOGIN_URL, MYACCOUNT_URL, CHECKOUT_URL } from '../../Route/URLMap';
import SearchIcon from '@material-ui/icons/Search';
import '.././Style/pizzamenu.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">

      <sidebar>
        <nav>
          <p>Search <SearchIcon style={{position:"relative", left:"100px", top:"8px"}}/></p>
        </nav>
        <ul>
            <li><NavLink to={HOME_URL}>HOME</NavLink></li>
            <li><NavLink to={PIZZAMENU_URL}>PIZZA MENU</NavLink></li>
            <li><NavLink to={PIZZABUILDER_URL}>PIZZA BUILDER</NavLink></li>
            <li><NavLink to={BLOG_URL}>BLOG</NavLink></li>
            <li><NavLink to={PAGES_URL}>PAGES</NavLink></li>
            <li><NavLink to={ABOUTUS_URL}>ABOUT US</NavLink></li>
            <li><NavLink to={CONTACT_URL}>CONTACT</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to={LOGIN_URL}>LOGIN</NavLink></li>
            <li><NavLink to={MYACCOUNT_URL}>MY ACCOUNT</NavLink></li>
            <li><NavLink to={CHECKOUT_URL}>CHECKOUT</NavLink></li>
          </ul>
            
      </sidebar>
    </div>
  );
}

export default Sidebar;