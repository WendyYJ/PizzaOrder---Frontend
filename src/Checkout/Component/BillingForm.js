import React from "react";
import { connect } from "react-redux";
import { loadCity as loadCityAction } from "../../redux/actions/stateActions";
import "../Style/BillingForms.scss";

class BillingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: "Queensland",
      selectedCities: []
    };
  }

  componentDidMount() {
    this.props.loadCity();
    this.loadCities();
  }

  loadCities = () => {
    const cities = this.props.cities["Queensland"];
    this.setState({ selectedCities: cities });
  };

  handleStateClick = e => {
    const newState = e.target.value;
    this.setState({ selectedState: newState }, () => {
      let cities = [];
      if (!this.props.isLoading) {
        cities = this.props.cities[this.state.selectedState];
        if (!!cities) {
          this.setState({ selectedCities: cities });
        }
      }
    });
  };

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  render() {
    return (
      <form className="form_details">
        <lable className="form_title">Full Name*</lable>
        <div className="form_name">
          <input
            name="First name"
            onChange={this.handleChange}
            placeholder="FIRST NAME"
            value={this.props.first_name}
          />
          <input
            name="Last name"
            onChange={this.handleChange}
            placeholder="LAST NAME"
            value={this.props.last_name}
          />
        </div>
        <lable className="form_title">Email Address*</lable>
        <div className="form_company">
          <input
            name="company"
            onChange={this.handleChange}
            value={this.props.company}
          />
        </div>
        <div className="form_location">
          <div className="form_location-state">
            <lable className="form_title">State*</lable>
            <select
              onChange={this.handleStateClick}
              defaultValue="Select State"
            >
              <option value="Queensland">Queensland</option>
              <option value="New South Wales">New South Wales</option>
              <option value="South Australia">South Australia</option>
              <option value="Tasmania">Tasmania</option>
              <option value="Victoria">Victoria</option>
              <option value="Western Australia">Western Australia</option>
              <option value="Esperance">Esperance</option>
            </select>
          </div>
          <div className="form_location-city">
            <lable className="form_title">City*</lable>
            <select onChange={this.handleChange}>
              {!!this.state.selectedCities &&
                this.state.selectedCities.map(c => {
                  return (
                    <option key={c} name="city" value={c}>
                      {c}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <lable className="form_title">Address*</lable>
        <div className="form_address">
          <input
            name="address"
            onChange={this.handleChange}
            placeholder="STREET"
            value={this.props.address}
          />
        </div>
        <div className="form_contact">
          <div className="form_contact-code">
            <lable className="form_title">Post Code*</lable>
            <input
              name="post_code"
              onChange={this.handleChange}
              placeholder="FOUR DIGITS"
              value={this.props.post_code}
            />
          </div>
          <div className="form_contact-phone">
            <lable className="form_title">Phone*</lable>
            <input
              name="phone"
              onChange={this.handleChange}
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

const mapStateToProps = state => {
  return {
    cities: state.state.city,
    isLoading: state.state.isLoading
  };
};

const mapDispatchToProps = dispatch => ({
  loadCity: () => dispatch(loadCityAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(BillingForm);
