import React from "react";
import './BillingForms.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

class BillingForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: "United Kingdom (UK)",
      firstName: "",
      lastName: "",
      companyName: "",
      streetAddress: "",
      apartment: "",
      city: "",
      country: "",
      postcode: "",
      email: "",
      phone: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div className="billForms-container">
         <p>COUNTRY *</p>
       <form className="select-country">
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="UK">
              United Kingdom (UK) 
            </option>
            <option value="AU">Australia</option>
            <option value="US">United States</option>
          </select>
        </form>
        <p>FIRST NAME *</p>
      <form className="first-name">
          <input
              type="firstName"
              name="firstName"
              placeholder="  First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
      </form>
       <p className="right"></p>
      <form className="last-name">
          <input
              type="lastName"
              name="lastName"
              placeholder="  Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
      </form>
       <p>COMPANY NAME *</p>
      <form className="company-name">
          <input
              type="companyName"
              name="companyName"
              placeholder="  Company Name"
              value={this.state.companyName}
              onChange={this.handleChange}
            />
      </form>
       <p>ADDRESS *</p>
      <form className="address">
          <input
              type="streetAddress"
              name="streetAddress"
              placeholder="  Street address"
              value={this.state.streetAddress}
              onChange={this.handleChange}
            />
      </form>

      <form className="address2">
          <input
              type="apartment"
              name="apartment"
              placeholder="  Apartment, suite, unit etc. (optional)"
              value={this.state.apartment}
              onChange={this.handleChange}
            />
      </form>
      <p>TOWN/ CITY *</p>
      <form className="city">
          <input
              type="city"
              name="city"
              placeholder="  Town/ City"
              value={this.state.city}
              onChange={this.handleChange}
            />
      </form>

      <p>STATE/ COUNTRY*</p>
      <form className="country">
          <input
              type="country"
              name="country"
              placeholder="  State/ Country"
              value={this.state.country}
              onChange={this.handleChange}
            />
      </form>

      <form className="postcode">
          <input
              type="postcode"
              name="postcode"
              placeholder="  Postcode/ Zip"
              value={this.state.postcode}
              onChange={this.handleChange}
            />
      </form>

      <form className="email">
          <input
              type="email"
              name="email"
              placeholder="  Email Address"
              value={this.state.email}
              onChange={this.handleChange}
            />
      </form>

      <form className="phone">
          <input
              type="phone"
              name="phone"
              placeholder="  Phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
      </form>
      </div>
    );
  }

}

export default BillingForm;