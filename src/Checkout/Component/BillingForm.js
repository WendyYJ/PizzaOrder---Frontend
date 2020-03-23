/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../Style/BillingForms.scss';


class BillingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form_details">
        <lable className="form_title">Full Name*</lable>
        <div className="form_name">
          <input
            name="First name"
            onChange={this.props.handleChange}
            placeholder="FIRST NAME"
            value={this.props.first_name}
          />
          <input
            name="Last name"
            onChange={this.props.handleChange}
            placeholder="LAST NAME"
            value={this.props.last_name}
          />
        </div>
        <lable className="form_title">Email Address*</lable>
        <div className="form_company">
          <input
            name="company"
            onChange={this.props.handleChange}
            value={this.props.company}
          />
        </div>
        <div className="form_location">
          <div className="form_location-state">
            <lable className="form_title">State*</lable>
            <select onChange={this.props.Statechange}><option>State</option></select>
          </div>
          <div className="form_location-city">
            <lable className="form_title">City*</lable>
            <select><option>State</option></select>
          </div>
        </div>
        <lable className="form_title">Address*</lable>
        <div className="form_address">
          <input
            name="address"
            onChange={this.props.handleChange}
            placeholder="STREET"
            value={this.props.address}
          />
        </div>
        <div className="form_contact">
          <div className="form_contact-code">
            <lable className="form_title">Post Code*</lable>
            <input
            name="post_code"
            onChange={this.props.handleChange}
            placeholder="FOUR DIGITS"
            value={this.props.post_code}
          />
          </div>
          <div className="form_contact-phone">
            <lable className="form_title">Phone*</lable>
            <input
              name="phone"
              onChange={this.props.handleChange}
              placeholder="MOBILE CONTACT"
              value={this.props.PHONE}
          />
          </div>
        </div>
        <lable className="form_title">Company</lable>
        <div className="form_company">
          <input
            name="company"
            onChange={this.props.handleChange}
            value={this.props.company}
          />
        </div>
      </form>
    );
  }
}

export default BillingForm;
