import React from "react";
import ".././PageLayout/Style/ShippingForm.scss";

class ShippingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Value: "United Kingdom (UK)",
      Country: "",
      Postcode: "",
      Code: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ 
      value: event.target.value
     });
  };

  render() {
    return (
      <div className="forms_container">
        <div className="left-forms">
          <h3 className="shipping-title">Calculate Shipping</h3>
          <form className="shipping_form">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="UK" className="selectedValue">
                United Kingdom (UK)
              </option>
              <option value="AU">Australia</option>
              <option value="US">United States</option>
            </select>
          </form>

          <form>
            <input
              type="text"
              placeholder="  State/Country"
              value={this.state.Country}
              onChange={this.handleChange}
            />
          </form><br></br>

          <form noValidate autoComplete="off">
            <input
              type="text"
              placeholder="  Postcode/ZIP"
              value={this.state.Postcode}
              onChange={this.handleChange}
            />

            <button className="updateButton">UPDATE TOTALS</button>
          </form>
        </div>

      <div className="right-forms">  
      <h3 className="promotion-title">Promotion Code</h3>
        <form className="code-form" noValidate autoComplete="off">
          <input
            type="text"
            placeholder="  Enter your promotional code"
            value={this.state.Code}
            onChange={this.handleChange}
          />
        <button className="applyButton">APPLY</button>
        </form>
       </div>
      </div>
    );
  }
}

export default ShippingForm;
