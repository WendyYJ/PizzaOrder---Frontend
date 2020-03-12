import React from "react";
import ".././PageLayout/Style/ShippingForm.scss";

class ShippingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "United Kingdom (UK)",
      Country: "",
      Postcode: "",
      Code: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  changeHandler = event =>{
    this.setState({ 
      country: event.target.value,
      postcode: event.target.value,
      code: event.target.value,
    });
  }

  render() {
    return (
      <div className="forms_container">
        <div>
          
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
            onChange={this.changeHandler}
          />
        </form>

        <form>
          <input
            type="text"
            placeholder="  Postcode/ZIP"
            onChange={this.changeHandler}
          />
        </form>

        <button className="updateButton">UPDATE TOTALS</button>
        </div>

      <div>  
        <form>
          <input
            type="text"
            placeholder="  Enter your promotional code"
            onChange={this.changeHandler}
          />
        </form>

        <button className="applyButton">APPLY</button>
        </div>
      </div>
    );
  }
}

export default ShippingForm;
