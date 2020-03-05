import React from 'react';
import '.././PageLayout/Style/TopHeader.scss';

class ShippingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'United Kingdom (UK)',
      Country: '',
      Postcode: '',
      Code:'',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  changeHandler = (event) => {
    this.setState({Country: event.target.value});
  }

  changeHandlerTwo = (event) => {
    this.setState({Postcode: event.target.value});
  }

  changeHandlerThree = (event) => {
    this.setState({Code: event.target.value});
  }

  render() {
    return (
    <div className="forms_container">
      <form className="shipping_form">
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="UK" className="selectedValue">United Kingdom (UK) <span></span></option>
            <option value="AU">Australia</option>
            <option value="US">United States</option>
          </select>
      </form>

      <form className="current_state">
        <input
          type='text' placeholder="  State/Country"
          onChange={this.changeHandler}
        />
       </form>

       <form className="postcode_zip">
        <input
          type='text' placeholder="  Postcode/ZIP"
          onChange={this.changeHandlerTwo}
        />
       </form>

       <button className="updateButton">UPDATE TOTALS</button>

       <form className="promotion_code">
        <input
          type='text' placeholder="  Enter your promotional code"
          onChange={this.changeHandlerThree}
        />
       </form>

       <button className="applyButton">APPLY</button>
   </div>

    );
  }
}


export default ShippingForm;