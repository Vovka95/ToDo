import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="navBar">
                <Navbar color="light" light expand="md">
                    <Link className="brand" to="/todo">
                        <img className="logo" src="../logo.ico" alt="logo"/> 
                        <NavbarBrand >Todo</NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/registration"><Button color="success">Registration</Button></Link>
                    </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;