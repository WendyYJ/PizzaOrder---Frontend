import React from 'react';
import '.././PageLayout/Style/PageStyle.scss';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: null,
      review: '',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.review);
  }
 
  render() {
    return (
    <div>
      <div className="review-form">
        
        <p>NAME*</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>EMAIL*</p>
        <input
          type='text'
          name='email'
          onChange={this.myChangeHandler}
        />
      

      <p>YOUR RATING</p>
      <span className="fiveStar-border">
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
      </span>
      <span className="fiveStar-border">
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
      </span>

      <span className="fiveStar-border">
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
      </span>

      <span className="fiveStar-border">
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
      </span>

      <span className="fiveStar-border">
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
        <StarBorderIcon style={{color: "#D94F2B", fontSize: "14px"}} />
      </span>

      </div>

      <div className="submit-form">
        <p>YOUR REVIEW</p> 
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
      </div>
      <div className="submit-button">
        <br></br><br></br>
        <input
          type='submit'
        />
    </div>
  </div>

    );
  }
}

export default ReviewForm;