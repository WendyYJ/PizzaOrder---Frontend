import React from 'react';
import '.././Style/pizzamenu.scss';
import title from "../../asset/icon/title.png";
import titleNav from "../../asset/icon/title_nav.png";
import sampleMenu from "../../asset/icon/sample_menu.png";


  const Main = () => {
    return (
    <div className="menumain">
     <menu>
      <img src={title} alt="title" id="title" />
      <img src={titleNav} alt="title_nav" id="title_nav" />
      
     </menu>
     <sample>
      <img src={sampleMenu} alt="sample_menu" id="sample_menu" />
     </sample>
    </div>
    );
  }

  export default Main;
