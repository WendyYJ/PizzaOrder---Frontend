import React, { Component } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../Style/LinkHeader.scss';

class LinkHeader extends Component {
  render() {
    return (
      <div className="secondary-header">
        <div className="secondary-header_content">
        <h1>
          {' '}
          {this.props.headername}
        </h1>

        <div className="link-container">
          Home
          <ArrowForwardIosIcon style={{ fontSize: 14 }} className="arrowicon" />
          {this.props.headername}
        </div>
        </div>
      </div>
    );
  }
}

export default LinkHeader;
