import React from "react";
import './BillingForms.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

class BillingForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Value: "United Kingdom (UK)",
      FirstName: "",
      LastName: "",
      CompanyName: "",
      StreetAddress: "",
      Apartment: "",
      City: "",
      Country: "",
      Postcode: "",
      Email: "",
      Phone: ""
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
              type="text"
              placeholder="  First Name"
              value={this.state.FirstName}
              onChange={this.handleChange}
            />
      </form>
       <p className="right"></p>
      <form className="last-name">
          <input
              type="text"
              placeholder="  Last Name"
              value={this.state.LastName}
              onChange={this.handleChange}
            />
      </form>
       <p>COMPANY NAME *</p>
      <form className="company-name">
          <input
              type="text"
              placeholder="  Company Name"
              value={this.state.CompanyName}
              onChange={this.handleChange}
            />
      </form>
       <p>ADDRESS *</p>
      <form className="address">
          <input
              type="text"
              placeholder="  Street address"
              value={this.state.StreetAddress}
              onChange={this.handleChange}
            />
      </form>

      <form className="address2">
          <input
              type="text"
              placeholder="  Apartment, suite, unit etc. (optional)"
              value={this.state.Apartment}
              onChange={this.handleChange}
            />
      </form>
      <p>TOWN/ CITY *</p>
      <form className="city">
          <input
              type="text"
              placeholder="  Town/ City"
              value={this.state.City}
              onChange={this.handleChange}
            />
      </form>

      <p>STATE/ COUNTRY*</p>
      <form className="country">
          <input
              type="text"
              placeholder="  State/ Country"
              value={this.state.Country}
              onChange={this.handleChange}
            />
      </form>

      <form className="postcode">
          <input
              type="text"
              placeholder="  Postcode/ Zip"
              value={this.state.Postcode}
              onChange={this.handleChange}
            />
      </form>

      <form className="email">
          <input
              type="text"
              placeholder="  Email Address"
              value={this.state.Email}
              onChange={this.handleChange}
            />
      </form>

      <form className="phone">
          <input
              type="text"
              placeholder="  Phone"
              value={this.state.Phone}
              onChange={this.handleChange}
            />
      </form>

      </div>
    );
  }

}

export default BillingForm;