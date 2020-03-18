import React, { Component} from 'react';
import _ from 'lodash';
import { withRouter,NavLink } from 'react-router-dom';
import {HOME_URL, PIZZAMENU_URL, PIZZABUILDER_URL, ABOUTUS_URL, CONTACT_URL, LOGIN_URL, MYACCOUNT_URL, CHECKOUT_URL} from '../../routes/URLMap';
import '../Style/LeftMenu.scss';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false,
            isLoading:false, 
            results: [], 
            value: 'search...' 
        }
    }
   
      openFloatMenu = () => {
        this.setState({ isOpen: true });
      };
    
      closeFloatMenu = () => {
        this.setState({ isOpen: false });
      };

      handleSearchChange = (e, { value }) => {   
        this.setState({ 
            isLoading: true, 
            value 
      });
     }

    render() {
        let classes = [];
        if (!!this.state.isOpen) {
            classes.push('float__menu float__menu--open');
        }
        return(     
            <div className={classes}>
            {this.state.isOpen && (
                <div className = "toggle-background-close" onClick={() => this.closeFloatMenu()}>
                    <span className="toggle toggle-close">
                    </span>
                 </div>
            )}
            {!this.state.isOpen && (
            <div className = "toggle-background" onClick={() => this.openFloatMenu()}>
                <span className="toggle">
                </span>
            </div>
            )}
            {
                this.state.isOpen && (   
                        <div className = "float__menu-item">
                            <input type="text" placeholder="Search.." />
                            <i className="fa fa-search"></i>
                            <NavLink  className = "float__menu-item-link" activeClassName="nav-item--active" to = {HOME_URL}>HOME</NavLink>
                            <NavLink  className = "float__menu-item-link" activeClassName="nav-item--active" to = {PIZZAMENU_URL}>PIZZAMENU</NavLink>
                            <NavLink  className = "float__menu-item-link" activeClassName="nav-item--active" to = {PIZZABUILDER_URL}>PIZZA BUILDER</NavLink>
                            <NavLink  className = "float__menu-item-link" activeClassName="nav-item--active" to = {ABOUTUS_URL}>ABOUT US</NavLink>
                            <NavLink  className = "float__menu-item-link" activeClassName="nav-item--active" to = {CONTACT_URL}>CONTACT</NavLink>  
                            <div className ="customHr"></div> 
                            <NavLink  className = "float__menu-item-link" activeClassName="nav-item--active" to = {LOGIN_URL}>LOGIN</NavLink> 
                            <NavLink  className = "float__menu-item-link" activeClassName="nav-item--active" to = {MYACCOUNT_URL}>MY ACCOUNT</NavLink> 
                            <NavLink  className = "float__menu-item-link" activeClassName="nav-item--active" to = {CHECKOUT_URL}>CHECKOUT</NavLink> 
                        </div>                
                )
            }       
            </div>
        );
    };
}

export default withRouter(LeftMenu);
