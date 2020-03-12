import React, { Component } from 'react';
import './Style.scss';
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";
import { NavLink } from "react-router-dom";
import { Button, Form, Input, Message, Segment } from 'semantic-ui-react';
import { register } from '../api/auth';
import { setToken } from '../utils/auth';
import {
  LOGIN_URL,
} from "../routes/URLMap";

class MyAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            email: '',
            password: '',
            password_confirmation: '',
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
            if (key == 'password' || key == 'password_confirmation')
              this.checkPassword();
      }
    );
   }
          
    updateUserInput = () => {
        const userInput = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        };
    
   
      this.setState({ isLoading: true }, () => {
          register(userInput)
              .then(res => {
                  this.setState({ userInput: true, isLoading: false }, () => {
                     const { token } = res.data.data;
                      setToken(token);
                      this.setState({
                              userInput: true,
                              history: this.props.history
                          });
                      });
                    })
              .catch(error => this.setState({ error, isLoading: false }));
      });
    }
  
    // check password validation
    checkPassword() {
        if(this.state.password != this.state.password_confirmation) {
           this.setState({password_invalid: true});
           alert('Your password is invalid');
       }
       else {
           this.setState({password_invalid: false});
       }
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
                <p className="register-title">CREATE AN ACCOUNT</p>
                
                <Segment>
                      <Form.Field>
                          <Input className="register-input"
                              name="username"
                              type="username"
                              onChange={this.handleChange}
                              placeholder='  Your Name'
                              value={this.state.username}
                            />
                      </Form.Field>
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
                        <Form.Field>
                            <Input
                              name="password_confirmation"
                              type="password"
                              onChange={this.handleChange}
                              placeholder='  Password Confirmation'
                              type="password_confirmation"
                              value={this.state.password_confirmation}
                            />
                        </Form.Field>
                       {!!this.state.error && (
                            <Message className="alart-message"
                                content="Please check your password !"
                            />
                       )}
                        <Button className="register-button"
                           onClick={this.updateUserInput}    
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

