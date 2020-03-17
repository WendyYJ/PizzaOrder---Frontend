import React, { Fragment } from 'react';
import Information from './components/Infomation';
import Middle from './components/Middle';
import Question from './components/Question';
import LinkHeader from '../PageLayout/Header/LinkHeader';
import Ingredient from '../PageLayout/Footer/Ingredient';
import Footer from '../PageLayout/Footer/Footer';

const AboutUs = () => (
  <div className="about-container">
    <>
      <LinkHeader headername="About Us" />
      <Information />
      <Middle />
      <Question />
      <Ingredient />
      <Footer />
    </>
  </div>
);

export default AboutUs;
