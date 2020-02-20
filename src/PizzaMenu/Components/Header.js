import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import '.././Style/pizzamenu.scss';

const Header = () => {
  return (
    <div className="header">
     <header>
        <h3>Margherita</h3> 
    
        <MenuIcon color="secondary" style={{position: "relative", left: "280px", top:"-15px"}}/>
    </header>
    </div>
  );
}

export default Header;
    
  
  
       