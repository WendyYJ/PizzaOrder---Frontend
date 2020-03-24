import React from 'react';
import { connect } from 'react-redux';
import { loadIngredient as loadIngredientAction } from '../redux/actions/ingredientAction';
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
                  <div className='builder__title'>
                      <h1 className='builder__title__heading'>
                          Pizza Builder
                      </h1>
                      <p className='builder__title__span'>Home > Pizza Builder</p>
                  </div>
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
                    <h2>
                      Your Order
                    </h2>
                    <div className='builder__checkout__row' >
                      <p>Products</p>
                      <p>Total</p>
                    </div>
                    <div className='builder__checkout__row'>
                      <p>Beef Pizza</p>
                      <p>$8.90</p>
                    </div>
                    <div className='builder__checkout__row'>
                      <p>Pizza Size: Medium 12</p>
                    </div>
                    <div className='builder__checkout__row'>
                      <p>
                        Order Total:
                      </p>
                      <p>$20.43</p>
                    </div>
                    <p>add to cart</p>
                    <p>add and create another pizza</p>
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
