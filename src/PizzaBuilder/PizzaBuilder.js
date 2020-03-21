import React from 'react';
import { connect } from 'react-redux';
import { loadIngredient as loadIngredientAction } from '../redux/actions/ingredientAction';
import Accordion from "./components/Accordion/Accordion";
import AccordionContent from "./components/AccordionContents/AccordionContent";
import Crust from "./components/AccordionContents/Crust/Crust";
import Footer from '../PageLayout/Footer/Footer';
import './PizzaBuilder.scss';
import { CircularProgress } from 'material-ui';

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
        {id: 2, title: 'Select Your Sauce', content: <AccordionContent cards={this.props.SAUCES} />},
        {id: 3, title: 'Add Cheese', content: <AccordionContent cards={this.props.SAUCES} />},
        {id: 4, title: 'Choose Your Toppings', content: <AccordionContent cards={this.props.SAUCES}/>},    
    ]
    render(){
      console.log(this.props.isLoading);
      console.log(this.props);
        return(
            <>
              {
                this.props.isLoading
                ? <div> do nothing</div>
                :
                <div>
                  <div className='builder__title'>
                      <h1 className='builder__title__heading'>
                          Pizza Builder
                      </h1>
                  </div>
                  <div>
                    {this.contentList.map( (contentItem) =>
                      <Accordion 
                        id={contentItem.id} 
                        title={contentItem.title} 
                        content={contentItem.content}
                      />
                    )}
                  </div>
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
