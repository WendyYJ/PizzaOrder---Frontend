import React from "react";
import "../Style/SampleMenu.scss";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import availableSizes from "../../asset/icon/available_sizes.png";
import Counter from "../../PageLayout/Counter";
import Size2 from "../Components/Size2"
import PeriPeri from "../../asset/img/PeriPeri.png";
import {connect} from  'react-redux';
import {addCart as addCartAction} from '../../redux/actions/pizzaActions';

class SampleMenu extends React.Component {


  handleClick = () => {
    const list = [];
  }

  render() {
    return (
  <div className="sample_menu">
    <div className="pizza-sample">
      <img className="dot2" src={this.props.pizzaImage} alt="pizza" />
    </div>
    <div className="sample-info">
      <div className="sample_text">
        <h2>{this.props.pizzaName}</h2>
        <div className="five-star">
          <StarIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <StarIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <StarIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <StarIcon style={{ coloyr: "#D94F2B", fontSize: "20px" }} />
          <StarBorderIcon style={{ color: "#D94F2B", fontSize: "20px" }} />
          <p style={{ fontSize: "14px" }}>{this.props.pizzaDesc}</p>
          <p style={{ fontSize: "14px" }}>AVAILABLE SIZES</p>
          <Size2 />

          <div className="clickCount">
            <Counter />
          </div>
          <button onClick={() => this.props.addCart()}
          className="addButton">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
);

    }

  }
const mapStateToProps = state => {
  return{
      pizzaName:state.pizza.pizzaName,
      pizzaPrice:state.pizza.pizzaPrice,
      pizzaDesc:state.pizza.pizzaDesc,
      errorMessage:state.pizza.errorMessage,
      isLoading:state.pizza.isLoading,
      pizza:state.pizza.pizza,
      pizzaImage: state.pizza.pizzaImage,
      selectedPizza: state.pizza.selectedPizza,
    

  };
};

const mapDispatchToProps= dispatch => ({
  addCart: () => dispatch (addCartAction())

  
});

export default connect(mapStateToProps,mapDispatchToProps)(SampleMenu);