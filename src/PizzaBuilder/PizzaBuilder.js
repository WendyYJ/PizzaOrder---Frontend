import React from 'react';
import { connect } from 'react-redux';
import { loadIngredient as loadIngredientAction } from '../redux/actions/ingredientAction';

import LinkHeader from '../PageLayout/Header/LinkHeader';
import Accordion from "./components/Accordion/Accordion";
import AccordionContent from "./components/AccordionContents/AccordionContent";
import Crust from "./components/AccordionContents/Crust/Crust";
import Footer from '../PageLayout/Footer/Footer';
import './PizzaBuilder.scss';

class PizzaBuilder extends React.Component{
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const type = ['MEATS','SAUCES','CHEESES','VEGGIGS'];
    this.props.loadIngredient(type);       
  }

    contentList = [
        {id: 1, title: 'Choose Your Crust\'s Size', content: <Crust/>},
        {id: 2, title: 'Select Your Sauce', content: <AccordionContent content='SAUCES'/> } ,
        {id: 3, title: 'Add Cheese', content: <AccordionContent content='CHEESES' />},
        {id: 4, title: 'Choose Your Toppings', content: <AccordionContent content='TOPPINGS'/> },    
    ]
    render(){
      // console.log(this.props.isLoading);
      // console.log(this.props.SAUCES);
        return(
            <>
              {
                this.props.isLoading
                ? <div> </div>
                :
                <div>
                <LinkHeader headername="Pizza Builder" />
                  <main className='builder'>
                  
                  <div>
                    {this.contentList.map( (contentItem) =>
                      <Accordion 
                        id={contentItem.id} 
                        title={contentItem.title} 
                        content={contentItem.content}
                      />
                    )}
                  </div>

                  <div className='builder__checkout'>
                    <h2 className='builder__checkout__title'>
                      Your Order
                    </h2>
                    <div className='builder__checkout__row caps sub-heading' >
                      <p>products</p>
                      <p>total</p>
                    </div>
                    <div className='builder__checkout__row'>
                      <p>Beef Pizza</p>
                      <p>$8.90</p>
                    </div>
                    <div className='builder__checkout__row'>
                      <p>Chicken Pizza</p>
                      <p>$10.90</p>
                    </div>
                    <div className='builder__checkout__row'>
                      <p>Cheese Pizza</p>
                      <p>$12.90</p>
                    </div>
                    <div className='builder__checkout__row end-of-order sub-heading'>
                      <p className='caps'>Pizza Size:</p> 
                      <p>Medium 12</p>
                    </div>
                    <div className='builder__checkout__row'>
                      <p className='total'>
                        Order Total:
                      </p>
                      <p className='total'>
                        $20.43</p>
                    </div>
                    <p className='button-cart'>add to cart</p>
                  </div>
                  </main>
                </div>
              } 
                
        <Footer/>
      
    </>
  
  
        );
    }
}

const mapStateToProps = (state) => ({
  MEATS: state.ingredient.MEATS,
  CHEESES: state.ingredient.CHEESES,
  SAUCES: state.ingredient.SAUCES,
  VEGGIGS: state.ingredient.VEGGIGS,
  isLoading: state.ingredient.isLoading,
  errorMessage:state.ingredient.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  loadIngredient: type => dispatch(loadIngredientAction(type)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder);
