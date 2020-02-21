import React from 'react';
import '.././Style/pizzamenu.scss';
import title from "../../icons/title.png";
import titleNav from "../../icons/title_nav.png";


  const Main = () => {
    return (
    <div className="menumain">
     <menu>
      <img src={title} alt="title" id="title" />
      <img src={titleNav} alt="title_nav" id="title_nav" />
      
     </menu>
     <sample>
      <h2>Peri-Peri</h2> 
      <i className="fal fa-circle" />
      
      </sample>
    </div>
    );
  }

  export default Main;
