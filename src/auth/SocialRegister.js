import React from "react";
import './Style.scss';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SocialRegister() {
  return (
    <div className="socialRegister-container">
      <p className="socialRegister-title">Join Us With</p>
      <div className="socialRegister-link">
        <Button className="social-link" id="facebook">
          <span>FACEBOOK</span>
        </Button>
        <Button className="social-link" id="google">
          <span>GOOGLE</span>
        </Button>
        <Button className="social-link" id="paypal">
          <span>PAYPAL</span>
        </Button>
      </div>
    </div>
  );
}

export default SocialRegister;