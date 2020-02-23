import React from 'react';

import Information from './components/Infomation'
import Middle from './components/Middle'
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader'

const AboutUs = () => {
  
   return (
      <div className="about-container">
<SecondaryHeader headername={"About Us"}/>
       <Information/>
       <Middle/>
      </div>
   );
}


export default AboutUs;