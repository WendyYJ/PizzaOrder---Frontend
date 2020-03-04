import React, {Fragment, useState} from 'react';
import './Contact.scss';
import '.././PageLayout/Style/PageStyle.scss';
import Header from '../PageLayout/Header/Header';
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader';
import Sidebar from '../PageLayout/Sidebar';
import Toggle from '../PageLayout/Toggle';
import ContactMap from './ContactMap';


const Contact = ({children}) =>{
  const [sidebarOpen, setSidebarOpen] = useState(false)

    const openHandler = () => {
        if(!sidebarOpen){
            setSidebarOpen(true);
        }else{
            setSidebarOpen(false);
        }
    }

    const sidebarCloseHandler = () => {
        setSidebarOpen(false);
    }

    let sidebar
    if (sidebarOpen) {
        sidebar = <Sidebar close={sidebarCloseHandler} sidebar={"sidebar"} />
    }

  return(
  <div className="contact-container">
   <Fragment>
    <Header />
    {sidebar}
    <Toggle click={openHandler}/>
    <p>{children}</p>
    <SecondaryHeader headername={"Contact Us"}/>
    <div className="map-container">
    <ContactMap />
    </div>
  </Fragment>
  </div>
  );
}

export default Contact;