import React, { Component } from "react";
import Slider from "react-slick";
import './homepage.scss';
import periperi from '../asset/img/PeriPeri.png';
// import salami from '../asset/img/Salami.jpg';
// import mushroom from'../asset/img/Shiitake.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        fade:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>

          <div className='homepage__menu'>
                <div className='homepage__menu-left '>
                <h2 className='homepage__menu-heading'>
                    Peri-Peri
                </h2>
                
                <p className='homepage__menu-price'>
                    $18-$37
                </p>
                <span className='homepage__menu-more'>
                    Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions & Bocconicini on a Tomato base, topped with Peri-Peri sauce.
                </span>
                <p className='homepage__menu-button'>
                    order now
                </p>
                </div>
                <div className='homepage__menu-right '>
                <img className='homepage__menu-image' src={periperi} alt='Peri Peri Pizza' />
                </div>
         
            </div>

          <div className='homepage__menu'>
           
          </div>

          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
    );
  }
}