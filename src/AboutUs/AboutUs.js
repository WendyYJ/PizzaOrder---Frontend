import React from 'react';
import Header from '../PageLayout/Header/Header'
import Information from './components/Infomation'
import Middle from './components/Middle'
import Question from './components/Question'
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader'
import Ingredient from '../PageLayout/Footer/Ingredient'
const AboutUs = () => {
  
   return (
      <div className="about-container">
         <Header/>
<SecondaryHeader headername={"About Us"}/>
       <Information/>
       <Middle/>
       <Question/>
       <Ingredient/>
      </div>
   );
}


export default AboutUs;