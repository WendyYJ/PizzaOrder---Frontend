import React from 'react';
import { connect } from 'react-redux';
import { loadIngredient as loadIngredientAction } from '../redux/actions/ingredientAction';


class PizzaBuilder extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const type = ['MEATS','SAUCES','CHEESES','VEGGIGS'];
    this.props.loadIngredient(type);       
  }

  render() {
    return(
      <div></div>
    )
  }
}

const mapStateToProps = (state) => ({
  MEATS: state.ingredient.MEATS,
  CHEESES: state.ingredient.CHEESES,
  SAUCES: state.ingredient.SAUCES,
  VEGGIGS: state.ingredient.VEGGIGS,
  isLoading: state.ingredient.isLoading,
});

const mapDispatchToProps = dispatch => ({
  loadIngredient: type => dispatch(loadIngredientAction(type)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder);
