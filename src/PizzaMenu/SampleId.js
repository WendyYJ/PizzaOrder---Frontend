import React from 'react';
import '.././PageLayout/Style/PageStyle.scss';
import Header from '../PageLayout/Header/Header';
import ThirdHeader from '../PageLayout/Header/ThirdHeader';
import HorizonBar from '../PageLayout/HorizonBar';
import SampleMenu from './Components/SampleMenu';
import ReviewForm from '../PageLayout/ReviewForm';
import RelatedProduct from './Components/RelatedProduct';

const MenuSamples = () => {
  return (
    <div className ="MenuMain-container">
      <Header />
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
     </div>
  );
}

export default MenuSamples;