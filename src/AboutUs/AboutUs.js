import React, {Fragment} from 'react';
import Information from './components/Infomation'
import Middle from './components/Middle'
import Question from './components/Question'
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader'
import Ingredient from '../PageLayout/Footer/Ingredient'
import PizzamenuSidebar from '../PageLayout/PizzamenuSidebar/PizzamenuSidebar';

const AboutUs = () => {
   

   return (
      <div className="about-container">
      <Fragment>
         <PizzamenuSidebar />
         <SecondaryHeader headername={"About Us"}/>
         <Information/>
         <Middle/>
         <Question/>
         <Ingredient/>
       </Fragment>
      </div>
   );
}


export default AboutUs;