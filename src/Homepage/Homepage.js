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
        
        <div className='homepage__comment'>
            <h2>
                Here's what some customers are saying...
            </h2>
            <p>
                customer service and product quality are our top priority. Although we strive to make every customer experience as easy as possible, it's how our customers<br/> rate us that really matters. Because it makes our customers happy! And we love making people happy.
            </p>
            <div>
                <div>
                    <div className='homepage__comment__profile-picture'>

                    </div>
                    <h3 className='homepage__comment__profile-name'>Floretieno Wihite</h3>
                    <p>&#9733; &#9733; &#9733; &#9734; &#9734;</p>
                    <p>" We are serving pizza, your pizza is the fave of our family. Pick us as the  pizza winner!</p>
                    <p>Daneirl Black</p>
                    <p>www.pizzatempo.com</p>
                </div>
            </div>



        </div>
                
                
            
            
            
            
        </div>
            







                


    
                







    


    )
}



export default Homepage;