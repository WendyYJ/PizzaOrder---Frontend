import React from 'react';
import '.././PageLayout/Style/PageStyle.scss';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

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
    <div className="pizza-review">
     <div className="menumain-review">
       <div className="reviewCountainer">
         <h3>Bradley Taylor</h3>
         <span>October 2, 2014</span>
         <span className="five-starRate">
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarBorderIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          </span>
         <p>Claritas est etiam processus dynamiaus, qui sequitur mutationerm consuetudium lectorum. 
           Mirum est notare quam littera gothioa, quam nunc putamus porum daram, antepolitterarum formas humanitatis
           per seacula quarta decima et quinta decima.
         </p>
      </div>
      <div className="reviewCountainer">
         <h3>Scarlet Bellarosa</h3>
         <span>November 16, 2014</span>
         <span className="five-starRate">
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarBorderIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarBorderIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarBorderIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          </span>
         <p>Claritas est etiam processus dynamiaus, qui sequitur mutationerm consuetudium lectorum. 
           Mirum est notare quam littera gothioa, quam nunc putamus porum daram, antepolitterarum.
         </p>
      </div>
      <div className="reviewCountainer">
         <h3>Cooper Elison</h3>
         <span>December 23, 2014</span>
         <span className="five-starRate">
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          </span>
         <p>Claritas est etiam processus dynamiaus, qui sequitur mutationerm consuetudium lectorum. 
           Mirum est notare quam littera gothioa, quam nunc putamus porum daram, antepolitterarum formas humanitatis
           per seacula quarta decima et quinta decima.
         </p>
      </div>
      <div className="reviewCountainer">
         <h3>Merryn Brown</h3>
         <span>January 10, 2015</span>
         <span className="five-starRate">
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "16px"}} />
          </span>
         <p>Claritas est etiam processus dynamiaus, qui sequitur mutationerm consuetudium lectorum.</p>
        </div>
      </div>

      <div className="reviewForm-container">
          <h2>Add a review</h2>
          
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
   </div>

    );
  }
}

export default ReviewForm;