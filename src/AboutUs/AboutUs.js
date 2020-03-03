import React, {Fragment, useState} from 'react';
import Header from '../PageLayout/Header/Header'
import Information from './components/Infomation'
import Middle from './components/Middle'
import Question from './components/Question'
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader'
import Ingredient from '../PageLayout/Footer/Ingredient'
import Sidebar from '../PageLayout/Sidebar';
import Toggle from '../PageLayout/Toggle';

const AboutUs = ({children}) => {
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
    
  
   return (
      <div className="about-container">
      <Fragment>
         <Header/>
         {sidebar}
         <Toggle click={openHandler} />
         <p>{children}</p>
         <SecondaryHeader headername={"About Us"}/>
         <Information/>
         <Middle/>
         <Question/>
         <Ingredient/>
       </Fragment>
      </div>
   );
}


export default AboutUs;