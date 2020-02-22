import React, { Component } from "react";
import '.././Style/pizzamenu.scss';
import SearchIcon from '@material-ui/icons/Search';

class Navigation extends Component {
  
  render() {
    return (
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
    );
  }
}

export default Navigation;