import React from 'react';
import '../../PageLayout/Style/PageStyle.scss';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import availableSizes from "../../asset/icon/available_sizes.png";



const SampleMenu = () => {
  return (
    <div className="sample_menu">
      <div>
          <span className="dot2"></span>
       </div>
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
        <p style={{fontSize: "14px", margin: "2px"}}>QUANTITY</p> <br></br>

        </div>
        </div>
    
    </div>


  );
}

export default SampleMenu;