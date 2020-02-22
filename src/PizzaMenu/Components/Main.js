import React from 'react';
import '.././Style/pizzamenu.scss';
import title from "../../asset/icon/title.png";
import titleNav from "../../asset/icon/title_nav.png";
import sampleMenu from "../../asset/icon/sample_menu.png";


  const Main = () => {
    return (
    <div className="menumain">
    
      <img src={title} alt="title" id="title" />
      <img src={titleNav} alt="title_nav" id="title_nav" />
      
     
     <div className="sample_menu">
      <img src={sampleMenu} alt="sample_menu" id="sample_menu" />
     </div>
    </div>
    );
  }

  export default Main;
