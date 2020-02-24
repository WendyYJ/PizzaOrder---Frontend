import React from 'react';
import '../PizzaMenu/Style/pizzamenu.scss';
import Header from '../PageLayout/Header/Header';
import ThirdHeader from '../PageLayout/Header/ThirdHeader';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const MenuMain = () => {
  return (
    <div className ="MenuMain-container">
      <Header />
      <ThirdHeader headername={"Pizza Menu"} headername2={"Peri-Peri"} />

      <ArrowForwardIcon style={{ fontSize: 14 }} className="arrowicon2"/>

    </div>
  );
}

export default MenuMain;