import React from 'react';
import '.././PageLayout/Style/PageStyle.scss';
import Header from '../PageLayout/Header/Header';
import ThirdHeader from '../PageLayout/Header/ThirdHeader';
import HorizonBar from '../PageLayout/HorizonBar';
import SampleMenu from './Components/SampleMenu';
import ReviewForm from '../PageLayout/ReviewForm';
import Counter from '../PageLayout/Counter';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const MenuMain = () => {
  return (
    <div className ="MenuMain-container">
      <Header />
      <ThirdHeader headername={"Pizza Menu"} headername2={"Peri-Peri"} />

      <HorizonBar className="horizonbar" />
      <SampleMenu />
      <Counter />

      <div className="horizonbar-Two">
        <p>DESCRIPTION</p>
        <p>NUTRITIONAL INFO</p>
        <p>ORDER DELIVERY</p>
        <p className="active">REVIEWS(4)</p>
      </div>
    
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
           Mirum est notare <br></br>
           quam littera gothioa, quam nunc putamus porum daram, antepolitterarum formas humanitatis
           per seacula <br></br>
           quarta decima et quinta decima.
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
           Mirum est notare <br></br>
           quam littera gothioa, quam nunc putamus porum daram, antepolitterarum.
           
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
           Mirum est notare <br></br>
           quam littera gothioa, quam nunc putamus porum daram, antepolitterarum formas humanitatis
           per seacula <br></br>
           quarta decima et quinta decima.
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

      <div className="reviewForm-container">
        <h2 className="reviewForm-title">Add a review</h2>
        <ReviewForm />
      </div>
    </div>

    </div>
  );
}

export default MenuMain;