import React from 'react';
//import Carousel from './Carousel';
import './homepage.scss';
import periperi from '../asset/img/PeriPeri.png';
import Information from '../AboutUs/components/Infomation';



const Homepage = props =>{

    return(
        <div className='homepage'>
            <main className='homepage__welcome'>
            <h1 className='homepage__welcome-heading'>
                Get it while it's hot!
            </h1>
            <span className='homepage__welcome-span'>
                We create custom, personal pizzas with quality   <br/> 
                ingredients in only five minutes.
            </span>
            <p className='homepage__welcome-button'>
                order online
                </p>
            </main>
            
        <Information/> 
        <div className='homepage__menu row'>
            <div className='homepage__menu-left col-md-4'>
            <h2 className='homepage__menu-heading'>
                Peri-Peri
            </h2>
            
            <p className='homepage__menu-price'>
                $18-$37
            </p>
            <p className='homepage__menu-more'>
                Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions & Bocconicini on a Tomato base, topped with Peri-Peri sauce.
            </p>
            <p className='homepage__menu-button'>
                order now
            </p>
            </div>
            <div className='homepage__menu-right col-md-4'>
            <img src={periperi} alt='Peri Peri Pizza' />
            </div>
         </div>

         <div className='homepage__pizza-builder'>
        <div className='homepage__pizza-builder__container'>
             <h2 className='homepage__pizza-builder__heading'>Build Your Own Pizza</h2>
             <p className='homepage__pizza-builder__heading-span'>Lorem ipsum dolor sit amet, conse et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep</p>
            <ul>
                <li className='homepage__pizza-builder__process'><span className='homepage__pizza-builder__process-number'>1.</span>&emsp; Choose Your Crust  </li> 
                <li className='homepage__pizza-builder__process'><span className='homepage__pizza-builder__process-number'>2.</span>&emsp;Select Your Sauce  </li> 
                <li className='homepage__pizza-builder__process'><span className='homepage__pizza-builder__process-number'>3.</span>&emsp;Add Cheese  </li> 
                <li className='homepage__pizza-builder__process'><span className='homepage__pizza-builder__process-number'>4.</span>&emsp;Choose Your Toppings </li> 
            </ul>
            </div>
            <p className='homepage__pizza-builder-button'>create your own pizza</p>

         </div>
        
                
                
            </div>
            







                


    
                







    


    )
}



export default Homepage;