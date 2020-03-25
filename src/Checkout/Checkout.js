import React from 'react';
import LinkHeader from '../PageLayout/Header/LinkHeader';
import BillingForm from './Component/BillingForm';
import BillTotal from './Component/BillTotal';
import Footer from '../PageLayout/Footer/Footer';
import './Style/Checkout.scss';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <LinkHeader headername="Checkout" />
        <div className="checkout__container">
          <div className="checkout__form">
            <p className="checkout__comment">
              Returning customer?
              <span>Click here to login</span>
            </p>
            <h2 className="checkout__title">Billing Details</h2>
            <BillingForm />
          </div>
          <div className="checkout__total">
            <p className="checkout__coupon">
              Having a coupon?
              <span>Click here to enter your code</span>
            </p>
            <BillTotal />
          </div>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </>
    );
  }
}

export default Checkout;
