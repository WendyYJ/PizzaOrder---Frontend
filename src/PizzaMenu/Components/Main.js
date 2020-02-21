import React from 'react';
import '.././Style/pizzamenu.scss';
import title from "../../icons/title.png";


  const Main = () => {
    return (
    <div className="menumain">
     <menu>
      <img src={title} alt="title" id="title" />
      
     </menu>
     <sample>
      <h2>Peri-Peri</h2> 
      <i className="fal fa-circle" />
      
      </sample>
    </div>
    );
  }

  export default Main;
