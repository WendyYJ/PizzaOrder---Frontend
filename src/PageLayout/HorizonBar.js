import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './Style/Horizonbar.scss';

const HorizonBar = () => (
  <div className="horizonbar">
    <ArrowForwardIcon style={{ fontSize: 14 }} className="arrowicon2" />
    <ArrowBackIcon style={{ fontSize: 14 }} className="arrowicon2" />
    <p>
      <ChevronLeftIcon style={{ fontSize: 14 }} className="arrowicon3" />
      <span>BACK TO MENU</span>
    </p>
    <div className="horizon" />
  </div>
);

export default HorizonBar;
