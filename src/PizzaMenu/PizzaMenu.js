import React, {Fragment} from 'react';
import Filter from './Components/Filter';
import SecondaryHeader from '../PageLayout/Header/SecondaryHeader';
import PizzamenuSidebar from '../PageLayout/PizzamenuSidebar/PizzamenuSidebar';

const PizzaMenu = () => {
   
      return (
      <div className="Catalog-container">
      <Fragment>
            <PizzamenuSidebar />
            <SecondaryHeader headername={"Pizza Menu"}/>
         <Filter />
      </Fragment>
      </div>
      );
   }

export default PizzaMenu;