import React from 'react';
import '../../PageLayout/Style/PageStyle.scss';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import availableSizes from "../../asset/icon/available_sizes.png";
import Counter from '../../PageLayout/Counter';
import PeriPeri from '../../asset/img/PeriPeri.png';



const SampleMenu = () => {
  return (
    <div className="sample_menu">
      <div className="pizza-sample">
          <img className='dot2' src={PeriPeri} alt="pizza"/>
       </div>
      <div className="sample-info">
       <div className="sample_text">
          <h2>Peri-Peri</h2>
        <div className="five-star">
          <StarIcon style={{color: "#D94F2B", fontSize: "20px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "20px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "20px"}} />
          <StarIcon style={{color: "#D94F2B", fontSize: "20px"}} />
          <StarBorderIcon style={{color: "#D94F2B", fontSize: "20px"}} />
        <p style={{fontSize: "14px"}}>Marinated Chicken Breast Fillets, Shallots, Roasted Capscum, Caramelised <br></br>
          Onions & Bocconichi on a Tomato base, topped with Peri-Peri sauce
        </p>
        <p style={{fontSize: "14px"}}>AVAILABLE SIZES</p>
        <img src={availableSizes} alt="available-size" id="available-size" />
        <h3>Price: $21</h3>
        <div class="clickCount">
          <p style={{fontSize: "14px", margin: "2px"}}>QUANTITY</p>
          <Counter /> 
        </div>
        <button className="addButton"
              
        >
          ADD TO CART
        </button>
      </div>
      </div>
    </div>
  </div>
  );
}

export default SampleMenu;