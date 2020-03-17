import React from 'react';
import '../Style/Information.scss';
import { connect } from 'react-redux';
import plus from '../../asset/img/plus.png';
import minus from '../../asset/img/minus.png';
import { showAnswer } from '../../redux/actions/questionActions';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.isShowing);
    return (
      <div className="questioncontainer">
        <h1>Frequently Asked Question</h1>
        <h2>Here are the answers to the most common questions we receive</h2>

        <div className="qu-container">
          <div>
            <h3>
              I can't find what I‘ m looking for. Where can I go to ask my
              question?
            </h3>
          </div>
          <div>
            <img src={plus} alt="+button" />
          </div>
        </div>

        <div className="qu-container">
          <div>
            <h3>What is the minimum amount I have to order for delivery</h3>
          </div>
          <div>
            <img src={plus} alt="+button" />
          </div>
        </div>

        <div className="qu-container">
          <div>
            <h3>How long will my delivery take?</h3>
            {this.props.isShowing ? (
              <p>
                We like to say deliveries take approximately 45 mins during
                weekdays and approximately 1 hours on weekends. We do our best
                to get your delicious pizza
                <br />
                out to you as soon as possible(we know you're craving it) but we
                like to give ourselves a little extra time in case our drivers
                encounter unforeseen
                <br />
                circumstances, which may include traffic and bad weather. The
                most important thing to us is making sure our drivers arrive
                safely and that your pizza
                <br />
                arrives hot!
              </p>
            ) : null}
          </div>

          <div>
            {this.props.isShowing ? (
              <img src={minus} onClick={this.props.showAnswer} alt="+button" />
            ) : (
              <img src={plus} onClick={this.props.showAnswer} alt="+button" />
            )}
          </div>
        </div>

        <div className="qu-container">
          <div>
            <h3>
              The website came up with an error message when it was processing
              my payment, and I am not sure
              <br />
              if my order whent through or not?
            </h3>
          </div>
          <div>
            <img src={plus} alt="+button" />
          </div>
        </div>

        <div className="qu-container1">
          <div>
            <h3>How can I find nutritional information on products?</h3>
          </div>
          <div>
            <img src={plus} alt="+button" />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showAnswer: () => dispatch(showAnswer()),
});

const mapStateToProps = (state) => ({
  isShowing: state.question.isShowing,
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
