import React from 'react';
import '../Style/Size2.scss';
import { connect } from 'react-redux';
import {
  handleClick1,
  handleClick2,
  handleClick3,
  handleClick4,
  handleClick5,
} from '../../redux/actions/pizzaActions';

class Size2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
    };
  }

  render() {
    return (
      <div className="crust2">
        {this.props.isClick1 ? (
          <div className="crust91-container">
            <div className="crust91">9"</div>

            <div className="crust91-text">Small</div>
          </div>
        ) : (
          <div onClick={this.props.handleClick1} className="crust9-container">
            <div className="crust9">9"</div>

            <div className="crust9-text">Small</div>
          </div>
        )}

        {this.props.isClick2 ? (
          <div className="crust121-container">
            <div className="crust121">12"</div>
            <div className="crust121-text">Medium</div>
          </div>
        ) : (
          <div onClick={this.props.handleClick2} className="crust12-container">
            <div className="crust12">12"</div>
            <div className="crust12-text">Medium</div>
          </div>
        )}

        {this.props.isClick3 ? (
          <div className="crust141-container">
            <div className="crust141">14"</div>
            <div className="crust141-text">Large</div>
          </div>
        ) : (
          <div onClick={this.props.handleClick3} className="crust14-container">
            <div className="crust14">14"</div>
            <div className="crust14-text">Large</div>
          </div>
        )}

        {this.props.isClick4 ? (
          <div className="crust161-container">
            <div className="crust161">16"</div>
            <div className="crust161-text">Jumbo</div>
          </div>
        ) : (
          <div onClick={this.props.handleClick4} className="crust16-container">
            <div className="crust16">16"</div>
            <div className="crust16-text">Jumbo</div>
          </div>
        )}

        {this.props.isClick5 ? (
          <div className="crust181-container">
            <div className="crust181">18"</div>
            <div className="crust181-text">Party Size</div>
          </div>
        ) : (
          <div onClick={this.props.handleClick5} className="crust18-container">
            <div className="crust18">18"</div>
            <div className="crust18-text">Party Size</div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick1: () => dispatch(handleClick1()),
  handleClick2: () => dispatch(handleClick2()),
  handleClick3: () => dispatch(handleClick3()),
  handleClick4: () => dispatch(handleClick4()),
  handleClick5: () => dispatch(handleClick5()),
});

const mapStateToProps = (state) => ({
  isClick1: state.pizza.isClick1,
  isClick2: state.pizza.isClick2,
  isClick3: state.pizza.isClick3,
  isClick4: state.pizza.isClick4,
  isClick5: state.pizza.isClick5,
});

export default connect(mapStateToProps, mapDispatchToProps)(Size2);
