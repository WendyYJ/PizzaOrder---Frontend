import React, { useState } from "react";
import "./ContentCard.scss";
import { handleClick } from "../../../redux/actions/pizzaActions";
import { connect } from "react-redux";

class ContentCard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    setSelected: ""
  };

  toggleSelection = () => {
    this.setState({
      setSelected: this.state.setSelected === "" ? "card-selected" : ""
    });
  };
  wapperFunction = () => {
    this.toggleSelection();
    this.props.handleClick();
  };
  render() {
    return (
      <div
        className={`content`}
        id={`${this.state.setSelected}`}
        onClick={this.wapperFunction}
      >
        <img
          className="content__img"
          src={this.props.image}
          alt={this.props.name}
        />
        <h3 className="content__name">{this.props.name}</h3>
        <p className="content__description">
          {this.state.setSelected === "" ? (
            this.props.description
          ) : (
            <div className="selected-tick"> &#x2714; </div>
          )}
        </p>
        <p className="content__price">${this.props.price}</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(handleClick())
});

const mapStateToProps = state => ({
  totalPrice: state.pizza.totalPrice
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentCard);
