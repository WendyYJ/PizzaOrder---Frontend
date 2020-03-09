import React, { Component } from 'react';
import './Style.scss';
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";
import { NavLink } from "react-router-dom";
import { Button, Form, Input, Message, Segment } from 'semantic-ui-react';
import { login as loginFunction } from '../api/auth';
import { setToken } from '../utils/auth';
// import CircularProgress from '@material-ui/core/CircularProgress';
import {
  LOGIN_URL,
  MYACCOUNT_URL,
} from "../routes/URLMap";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            error: null,
            isLoading: false,
            password: '',
        };
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    login = () => {
      this.setState({ error: null, isLoading: true }, () => {
          loginFunction(this.state.email, this.state.password)
              .then(jwtToken => {
                  this.setState({ isLoading: false }, () => {
                      setToken(jwtToken);
                      const locationState = this.props.location.state;
                      const redirectTo = (locationState && locationState.from) || LOGIN_URL;
                      this.props.history.replace(redirectTo);
                  });
              })
              .catch(error => this.setState({ error, isLoading: false }));
      });
  }

    render() {
      // const { isLoading } = this.state;
      
        return (
          <div className="login-container">
            <PizzamenuSidebar />
                <Form
                    className="login-form" size="large"
                    error={!!this.state.error}
                    loading={this.state.isLoading}
                >
                <h2>Login Form</h2>
                
                <Segment stacked>
                    <Form.Field>
                          <Input className="login-input"
                                icon='user'
                                iconPosition='left'
                                name="email"
                                onChange={this.handleChange}
                                placeholder='E-mail address'
                                value={this.state.email}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input
                                icon='lock'
                                iconPosition='left'
                                name="password"
                                onChange={this.handleChange}
                                placeholder='Password'
                                type="password"
                                value={this.state.password}
                            />
                        </Form.Field>
                       {!!this.state.error && (
                            <Message className="alart-message"
                                error
                                content="Please check your email and password"
                            />
                       )}
                        <Button className="login-button"
                            size="large"
                            fluid
                            primary
                            onClick={this.login}
                        >
                            Login
                        </Button>
                       <NavLink className="register" to={MYACCOUNT_URL}><p>Not registered yet?</p></NavLink>
                    </Segment>
                </Form>
            </div>
        );
    }
}

export default Login;

