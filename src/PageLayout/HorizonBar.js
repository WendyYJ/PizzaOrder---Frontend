import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './Style/Horizonbar.scss';
import { NavLink } from 'react-router-dom';
import { PIZZAMENU_URL } from '../routes/URLMap';

const HorizonBar = () => (
  <div className="horizonbar">
    <NavLink className="arrow-link" to={PIZZAMENU_URL}>
      <ChevronLeftIcon style={{ fontSize: 14 }} className="arrowicon3" />
      <span>BACK TO MENU</span>
    </NavLink>
    <div className="horizon" />
  </div>
);

export default HorizonBar;
