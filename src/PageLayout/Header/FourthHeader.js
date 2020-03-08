import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "../Style/LinkHeader.scss";

class FourthHeader extends Component {
  render() {
    return (
      <div className="forth-header">
        <h1> {this.props.headername}</h1>

        <div className="link-containerThree">
          Home
          <ArrowForwardIosIcon style={{ fontSize: 14 }} className="arrowicon" />
          {this.props.headername}
        </div>
      </div>
    );
  }
}

export default FourthHeader;
