
import React from "react";
import Slider from "react-slick";
import './Carousel.scss';
import periperi from '../../asset/img/PeriPeri.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Carousel extends React.Component{
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className='homepage__menu__container'>
        <div className='homepage__menu'>
            <div className='homepage__menu-left'>
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
            <div className='homepage__menu-right'>
            <img src={periperi} alt='Peri Peri Pizza' />
            </div>
         </div>
        <div className='homepage__menu '>
          <img src='https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80' alt='showcase'/>
        </div>
        <div className='homepage__menu '>
        <h3>3</h3>
        </div>
        <div className='homepage__menu'>
        <h3 >4</h3>
        </div>
        <div className='homepage__menu'>
          <h3>5</h3>
        </div>
        <div className='homepage__menu'>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }  
}


export default Carousel;