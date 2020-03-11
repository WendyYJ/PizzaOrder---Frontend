import React, { Component } from 'react';
import './Style.scss';
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";
import { NavLink } from "react-router-dom";
import { Button, Form, Input, Message, Segment } from 'semantic-ui-react';
import { register as registerFunction } from '../api/auth';
import { setToken } from '../utils/auth';
import {
  LOGIN_URL,
  MYACCOUNT_URL,
} from "../routes/URLMap";

class MyAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            email: '',
            isLoading: false,
            password: '',
            password_confirmation: '',
            registrationError: null,
        };
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    Register = () => {
      this.setState({ isLoading: true }, () => {
          registerFunction(this.state.email, this.state.password)
              .then(jwtToken => {
                  this.setState({ isLoading: false }, () => {
                      setToken(jwtToken);
                      const locationState = this.props.location.state;
                      const redirectTo = (locationState && locationState.from) || MYACCOUNT_URL;
                      this.props.history.replace(redirectTo);
                  });
              })
              .catch(registrationError => this.setState({ registrationError, isLoading: false }));
      });
  }

    render() {
  
        return (
          <div className="myAccount-container">
            <PizzamenuSidebar />
                <Form
                    className="register-form" 
                    error={!!this.state.error}
                    loading={this.state.isLoading}
                >
                <h2>Join Us</h2>
                
                <Segment>
                      <Form.Field>
                          <Input className="register-input"
                              name="username"
                              onChange={this.handleChange}
                              placeholder='  Your Name'
                              value={this.state.username}
                            />
                      </Form.Field>
                      <Form.Field>
                          <Input className="register-input"
                              name="email"
                              onChange={this.handleChange}
                              placeholder='  E-mail address'
                              value={this.state.email}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input
                              name="password"
                              onChange={this.handleChange}
                              placeholder='  Password'
                              type="password"
                              value={this.state.password}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input
                              name="password_confirmation"
                              onChange={this.handleChange}
                              placeholder='  Password Confirmation'
                              type="password_confirmation"
                              value={this.state.password}
                            />
                        </Form.Field>
                       {!!this.state.error && (
                            <Message className="alart-message"
                                content="Please check your password !"
                            />
                       )}
                        <Button className="register-button"
                            onClick={this.Register}
                        >
                          Register
                        </Button>
                       <NavLink className="login-link" to={LOGIN_URL}><p>Already registered ?</p></NavLink>
                    </Segment>
                </Form>
            </div>
        );
    }
}

export default MyAccount;

