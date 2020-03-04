import React, {Fragment, useState} from 'react';
import './Contact.scss';
import '.././PageLayout/Style/PageStyle.scss';
import Header from '../PageLayout/Header/Header';
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader';
//import Sidebar from '../PageLayout/Sidebar';
//import Toggle from '../PageLayout/Toggle';
// import ContactMap from './ContactMap';


const Contact = () => {
 

return (
  <div className="contact-container">
   
        <Header />
       
    
        <SecondaryHeader headername={"Contact Us"}/>
        
   

  </div>
 )
}

export default Contact;