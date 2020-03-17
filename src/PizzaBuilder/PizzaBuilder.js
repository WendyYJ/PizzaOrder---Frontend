import React from "react";
import Accordion from "./components/Accordion/Accordion";
import Sauces from "./components/AccordionContents/Sauces/Sauces";
import Footer from '../PageLayout/Footer/Footer';
import './PizzaBuilder.scss';

class PizzaBuilder extends React.Component{

    contentList = [
        {id: 1, title: 'Choose Your Crust\'s Size', content:"Crusts goes here!"},
    
        {id: 2, title: 'Select Your Sauce', content: <Sauces/>},
    
        {id: 3, title: 'Add Cheese', content:'haha let\'s see!'},

        {id: 4, title: 'Choose Your Toppings', content:<Footer/>},
        
      ]
    

    render(){
        return(
            <div>
                <div className='builder__title'>
                    <h1 className='builder__title__heading'>
                        Pizza Builder
                    </h1>
                </div>
        {this.contentList.map( (contentItem) =>
            <Accordion id={contentItem.id} title={contentItem.title} content={contentItem.content}/>
            )
        }
        <Footer/>
    </div>
  
  
        );
    }
}

export default PizzaBuilder;
