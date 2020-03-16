import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "../Style/LinkHeader.scss";
import {connect} from  'react-redux';
class ThirdHeader extends Component {
  render() {
    return (
      <div className="third-header">
        <h1> {this.props.headername}</h1>
        <div className="link-containerTwo">
           Home
          <ArrowForwardIosIcon style = {{ fontSize: 14 }} className="arrowicon" />
          {this.props.headername}
          <ArrowForwardIosIcon style = {{ fontSize: 14 }} className="arrowicon" />
          {this.props.pizzaName}
        </div>
      </div>
    );
  }
}

const mapStateToProps= state => {
  return{
       pizzaName:state.pizza.pizzaName,

  };
};


export default connect(mapStateToProps)(ThirdHeader);
