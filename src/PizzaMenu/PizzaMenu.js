import React from 'react';
import '../PizzaMenu/Style/PizzaMenu.css';
import { NavLink } from 'react-router-dom';
import PIZZAMENU_URL from '../Route/route';
import HOME_URL from '../Route/route';
import PIZZABUILDER_URL from '../Route/route';
import BLOG_URL from '../Route/route';
import PAGES_URL from '../Route/route';
import ABOUTUS_URL from '../Route/route';
import CONTACT_URL from '../Route/route';
import LOGIN_URL from '../Route/route';
import MYACCOUNT_URL from '../Route/route';
import CHECKOUT_URL from '../Route/route';


const PizzaMenu = () => {
  return (
    <div className="Menu-container">
     
      <header>
        <h3>Margherita</h3> 
      </header>
      
      <nav>
        <p>Search</p> 
      </nav>
        
      <sidebar>
         <ul>
          <li><NavLink to={HOME_URL}>HOME</NavLink></li>
          <li><NavLink to={PIZZAMENU_URL}>PIZZA MENU</NavLink></li>
          <li><NavLink to={PIZZABUILDER_URL}>PIZZA BUILDER</NavLink></li>
          <li><NavLink to={BLOG_URL}>BLOG</NavLink></li>
          <li><NavLink to={PAGES_URL}>PAGES</NavLink></li>
          <li><NavLink to={ABOUTUS_URL}>ABOUT US</NavLink></li>
          <li><NavLink to={CONTACT_URL}>CONTACT</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to={LOGIN_URL}>LOGIN</NavLink></li>
          <li><NavLink to={MYACCOUNT_URL}>MY ACCOUNT</NavLink></li>
          <li><NavLink to={CHECKOUT_URL}>CHECKOUT</NavLink></li>
        </ul>
      
    </sidebar>
    <menu>
      <h1>PIZZA MENU</h1> 
      
    </menu>
    <sample>
      <h2>Peri-Peri</h2> 
      <i className="fal fa-circle" />
      
     </sample>
    
     <cart>
      <h2>Cart Totals</h2>
          <ul>
            <li>
              <div>
                <i className="fas fa-circle" />
                <h4>Moorish Lamb</h4>
              </div>
            </li>
            <li>
              <div>
                <i className="fas fa-circle" />
                <h4>Vegetarian<br></br>Supreme</h4>
              </div>
            </li>
            <li>
              <div>
                <i className="fas fa-circle" />
                <h4>Spiced<br></br> Pumpkin</h4>
              </div>
            </li>
          </ul><br></br>

          <h3>Order Total <span>$79.00</span></h3>
          <button className="viewCart-btn">VIEW SHOPPING CART</button><br></br>
          <button className="checkout-btn">CHECKOUT</button>
    </cart>

    </div>
  );
}

export default PizzaMenu;
