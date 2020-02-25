import React from 'react';
import '.././PageLayout/Style/PageStyle.scss';
import Header from '../PageLayout/Header/Header';
import ThirdHeader from '../PageLayout/Header/ThirdHeader';
import HorizonBar from '../PageLayout/HorizonBar';
import SampleMenu from './Components/SampleMenu';
import Counter from '../PageLayout/Counter';

const MenuMain = () => {
  return (
    <div className ="MenuMain-container">
      <Header />
      <ThirdHeader headername={"Pizza Menu"} headername2={"Peri-Peri"} />

      <HorizonBar className="horizonbar" />
      <SampleMenu />
      <Counter />
    </div>
  );
}

export default MenuMain;