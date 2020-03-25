import React from "react";
import axios from "axios";
import ContentCard from "./ContentCard";
import { connect } from "react-redux";

class AccordionContent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    cards: [],
    totalPrice: 0
  };

  componentDidMount() {
    switch (this.props.content) {
      case "TOPPINGS":
        let TOPPING,
          MEAT,
          VEG = [];
        MEAT = this.props.MEATS;
        VEG = this.props.VEGGIGS;
        TOPPING = [...MEAT, ...VEG];
        this.setState({ cards: TOPPING });
        break;
      case "SAUCES":
        this.setState({ cards: this.props.SAUCES });
        break;
      case "CHEESES":
        this.setState({ cards: this.props.CHEESES });
        break;
      default:
        this.setState({ cards: [] });
    }
  }

  render() {
    return (
      <section className="content__flex">
        {this.state.cards.map(card => (
          <ContentCard
            key={card.id}
            name={card.IngredientName}
            image={card.Image}
            price={card.UnitPrice}
            description={card.Description}
          />
        ))}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  MEATS: state.ingredient.MEATS,
  CHEESES: state.ingredient.CHEESES,
  SAUCES: state.ingredient.SAUCES,
  VEGGIGS: state.ingredient.VEGGIGS,
  isLoading: state.ingredient.isLoading,
  errorMessage: state.ingredient.errorMessage,
  totalPrice: state.pizza.totalPrice
});

export default connect(mapStateToProps)(AccordionContent);
