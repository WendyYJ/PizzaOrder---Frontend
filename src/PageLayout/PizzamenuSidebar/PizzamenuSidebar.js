import React, {Fragment, useState} from 'react';
import MenuSidebar from './MenuSidebar';
import MenuToggle from './MenuToggle';
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
        sidebar = <MenuSidebar close={sidebarCloseHandler} sidebar={"sidebar"} />
    }

return(
 <div className="sample-sidebar">
   <Fragment>
            <Header />
            {sidebar}
            <MenuToggle click={openHandler}/>
            <p>{children}</p>
   </Fragment>

 </div>
)
}

export default PizzamenuSidebar;