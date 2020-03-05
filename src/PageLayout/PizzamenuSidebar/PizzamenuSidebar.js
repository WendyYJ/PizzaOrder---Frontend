import React, {Fragment, useState} from 'react';
import Sidebar from './MenuSidebar';
import Toggle from './Toggle';
import Header from '../Header/Header';

const PizzamenuSidebar = ({children}) => {

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
 <div className="sample-sidebar">
   <Fragment>
            <Header />
            {sidebar}
            <Toggle click={openHandler}/>
            <p>{children}</p>
   </Fragment>

 </div>
)
}

export default PizzamenuSidebar;