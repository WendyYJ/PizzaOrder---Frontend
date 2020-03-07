import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "../Style/SecondaryHeader.scss";

class ThirdHeader extends Component {
  render() {
    return (
      <div className="third-header">
        <h1> {this.props.headername}</h1>

        <div className="link-containerTwo">
          Home
          <ArrowForwardIosIcon style={{ fontSize: 14 }} className="arrowicon" />
          {this.props.headername}
          <ArrowForwardIosIcon style={{ fontSize: 14 }} className="arrowicon" />
          {this.props.headername2}
        </div>
      </div>
    );
  }
}

export default ThirdHeader;
