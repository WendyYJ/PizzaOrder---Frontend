import React from 'react';
import './Style/Header.scss';
import LeftMenu from './Component/LeftMenu';
import ShoppingCart from './Component/ShoppingCart';

const Navigation = () => (
  <div>
    <LeftMenu />
    <ShoppingCart />
    <div className="page__header">
      <header className="page__header-title">Margherit</header>
    </div>
  </div>
);

export default Navigation;
