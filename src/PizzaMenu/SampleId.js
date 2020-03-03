import React, {Fragment, useState} from 'react';
import '.././PageLayout/Style/PageStyle.scss';
import Header from '../PageLayout/Header/Header';
import ThirdHeader from '../PageLayout/Header/ThirdHeader';
import HorizonBar from '../PageLayout/HorizonBar';
import SampleMenu from './Components/SampleMenu';
import ReviewForm from '../PageLayout/ReviewForm';
import RelatedProduct from './Components/RelatedProduct';
import Sidebar from '../PageLayout/Sidebar';
import Toggle from '../PageLayout/Toggle';

const MenuSamples = ({children}) => {
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
    <div className ="MenuMain-container">
      
      <Fragment>
        <Header />
        {sidebar}
        <Toggle click={openHandler}/>
        <p>{children}</p>
        <ThirdHeader headername={"Pizza Menu"} headername2={"Peri-Peri"} />

        <HorizonBar className="horizonbar" />
        <SampleMenu />
     
      <div className="horizonbar-Two">
        <p>DESCRIPTION</p>
        <p>NUTRITIONAL INFO</p>
        <p>ORDER DELIVERY</p>
        <p className="active">REVIEWS(4)</p>
      </div>
        <ReviewForm />
        <RelatedProduct />
      </Fragment>
     </div>
  );
}

export default MenuSamples;