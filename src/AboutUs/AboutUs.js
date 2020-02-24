import React from 'react';
import Header from '../PageLayout/Header/Header'
import Information from './components/Infomation'
import Middle from './components/Middle'
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader'

const AboutUs = () => {
  
   return (
      <div className="about-container">
         <Header/>
<SecondaryHeader headername={"About Us"}/>
       <Information/>
       <Middle/>
      </div>
   );
}


export default AboutUs;