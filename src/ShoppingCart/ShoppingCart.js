import React, {Fragment, useState} from 'react';
import '.././PageLayout/Style/PageStyle.scss';
import Header from '../PageLayout/Header/Header';
import FourthHeader from '../PageLayout/Header/FourthHeader'
import Cart from '../PageLayout/Cart';
import Sidebar from '../PageLayout/Sidebar';
import Toggle from '../PageLayout/Toggle';


const ShoppingCart = ({children}) => {
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
    <div className="shoppingCart-container">
      <Fragment>
      <Header />
      {sidebar}
      <Toggle click={openHandler}/>
      <p>{children}</p>

      <FourthHeader headername={"Shopping Cart"} style={{width: "100%"}}/>
      <div className="shoppingCart1">
      <div className="horizonbar-Three">
        <p>PRODUCT</p>
        
        <span className="price"><p>PRICE</p></span>
        <p>QTY</p>
        <p>TOTAL</p>
        
      </div>
        <Cart />
    </div>
    </Fragment>
    </div>

  );
}

export default ShoppingCart;