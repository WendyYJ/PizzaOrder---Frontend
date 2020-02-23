import React from 'react';
//import Carousel from './Carousel';
import './homepage.scss';
import periperi from '../asset/img/PeriPeri.png';



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

        <div className='homepage__menu row'>
            <div className='col-md-1' ></div>
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
            <div className='col-md-1' ></div>
        
         </div>
    
                
                
            </div>
            







                


    
                







    


    )
}



export default Homepage;