import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import '../Style/pizzamenu.scss';

const Header = () => {
  return (
    <div className="header">
     <header>
        <h3>Margherita</h3> 
      <nav>
        <p>Search <SearchIcon style={{position:"relative", left:"100px", top:"8px"}}/></p>
      </nav>
        <MenuIcon style={{position: "relative", left: "280px", top:"-60px", color:"disabled"}}/>
    </header>
    </div>
  );
}

export default Header;
    
  
  
       