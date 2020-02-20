import React from 'react';
import '../PizzaMenu/Style/pizzamenu.scss';
import { NavLink, Link } from 'react-router-dom';
import { PIZZAMENU_URL, HOME_URL, PIZZABUILDER_URL, BLOG_URL, ABOUTUS_URL, PAGES_URL, CONTACT_URL,LOGIN_URL, MYACCOUNT_URL, CHECKOUT_URL} from '../Route/URLMap';
import Header from '../PizzaMenu/Components/Header';


const PizzaMenu = () => {
  
  return (
    <div className="Menu-container">
    
      <Header />
      
        
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
          <button className="viewCart-btn"><Link style={{color: "#FDBC2C", textDecoration: "none"}}to={MYACCOUNT_URL}>VIEW SHOPPING CART</Link></button><br></br>
          <button className="checkout-btn"><Link style={{color: "black", textDecoration: "none"}}to={CHECKOUT_URL}>CHECKOUT</Link></button>
    </cart>

    </div>
  );
}

export default PizzaMenu;
