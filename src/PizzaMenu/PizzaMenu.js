import React, {Fragment, useState} from 'react';
import Header from '../PageLayout/Header/Header';
import Filter from './Components/Filter';
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader';
import Sidebar from '../PageLayout/Sidebar';
import Toggle from '../PageLayout/Toggle';

const PizzaMenu = ({children}) => {
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
      <div className="Catalog-container">
      <Fragment>
            <Header />
            {sidebar}
            <Toggle click={openHandler}/>
            <p>{children}</p>
            <SecondaryHeader headername={"Pizza Menu"}/>
         <Filter />
      </Fragment>
      </div>
      );
   }


export default PizzaMenu;