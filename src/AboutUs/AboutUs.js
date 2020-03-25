import React, { Fragment } from 'react';
import Information from './components/Infomation';
import Question from './components/Question';
import LinkHeader from '../PageLayout/Header/LinkHeader';
import Ingredient from '../PageLayout/Footer/Ingredient';
import Footer from '../PageLayout/Footer/Footer';
import Carousel from '../Homepage/components/Carousel';

const AboutUs = () => (
  <div className="about-container">
    <>
      <LinkHeader headername="About Us" />
      <Information />
      <div id="carousel">
      <Carousel />
    </div>
      <Question />
      <Ingredient />
      <Footer />
    </>
  </div>
);

export default AboutUs;
