import React, { Component } from 'react';
import './Style.scss';
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";
import { NavLink } from "react-router-dom";
import { Button, Input, Form, Message, Segment } from 'semantic-ui-react';
import { login } from '../api/auth';
import { setToken } from '../utils/auth';
import FacebookIcon from '@material-ui/icons/Facebook';
import {
  MYACCOUNT_URL,
  SHOPPINGCART_URL,
} from "../routes/URLMap";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            password_confirmed: '',
            isLoading: false,
            password_invalid: false,
            error: null,
        };
    }

    handleChange = event => {
        const { key, value } = event.target;
      
        this.setState({
            [key] : value 
          }, () => {
            if (key == 'password')
              this.checkPassword();
      }
    );
   }

    updateUserInput = () => {
        const userInput = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
    
   
      this.setState({ error: null, isLoading: true }, () => {
          login(userInput)
              .then(res => {
                  this.setState({ isLoading: false }, () => {
                      const { token } = res.data.data;
                      setToken( token );
                      const locationState = this.props.location.state;
                      const redirectTo = (locationState && locationState.from) || SHOPPINGCART_URL;
                      this.props.history.replace(redirectTo);
                  });
              })
              .catch(error => this.setState({ error, isLoading: false }));
      });
  }

  // check password validation
  checkPassword() {
    if(this.state.password != this.state.password_confirmed) {
       this.setState({password_invalid: true});
       Message('Your password is invalid');
   }
   else {
       this.setState({password_invalid: false});
   }
}
  
    render() {
  
        return (
          <div className="login-container">
            <PizzamenuSidebar />
                <Form
                    className="  login-form" 
                    error={!!this.state.error}
                    loading={this.state.isLoading}
                >
                <p className="login-title">LOG IN WITH EMAIL</p>
                
                <Segment>
                      <Form.Field>
                          <Input className="register-input"
                              name="email"
                              type="email"
                              onChange={this.handleChange}
                              placeholder='  E-mail address'
                              value={this.state.email}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input
                              name="password"
                              type="password"
                              onChange={this.handleChange}
                              placeholder='  Password'
                              value={this.state.password}
                            />
                        </Form.Field>
                        
                    {!!this.state.error && (
                        <Message className="alart-message"
                                content="Please check your email and password !"
                        />
                    )}
                        <Button className="login-button" 
                            onClick={this.updateUserInput} 
                        >
                          Login
                        </Button>
                       <NavLink className="register-link" to={MYACCOUNT_URL}><p>Not registered yet?</p></NavLink>
                    </Segment>
                </Form>
                
            </div>
        );
    }
}

export default Login;

