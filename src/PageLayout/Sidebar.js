import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { PIZZAMENU_URL, HOME_URL, PIZZABUILDER_URL, 
  BLOG_URL, ABOUTUS_URL, PAGES_URL, CONTACT_URL, 
  LOGIN_URL, MYACCOUNT_URL, CHECKOUT_URL } from '../Route/URLMap';
import SearchIcon from '@material-ui/icons/Search';
import '.././PageLayout/Style/PageStyle.scss';

class Sidebar extends Component {

  render() {
     return (
      <div className="sidebar-container">
      <div className="sidebar">
       <nav className="navbar navbar-expand-md navbar-light fixed-top">
          <div className="container-fluid">
            <a className="navbar" href="/"> 
            </a>
            
            <form className="input">
             <SearchIcon style={{position:"relative", left:"100px", top:"8px"}}/> 
              <i className="fas fa-search" />
              <input
                className="control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
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
      </div>
    </div>
  );
}
}

export default Sidebar;