import React from 'react';
import './Homepage.scss';


const Homepage = props =>{

    return(
        <div className='homepage'>
            <main className='homepage__welcome'>
            <h1 className='homepage__welcome-heading'>
                Get it while it's hot!
            </h1>
            <span className='homepage__welcome-span'>
                We create custom, personal pizzas with quality ingredients in only five minutes.
            </span>
            <p className='homepage__welcome-button'>
                Order Now
                </p>
            </main>





        </div>


    )
}



export default Homepage;