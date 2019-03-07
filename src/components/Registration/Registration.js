import React, { Component } from 'react';
import {Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import classnames from 'classnames';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menu from '../Menu';

class Registration extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
  
    render() {
        return (
            <Container>
                <div className="App">
                
                    <Menu></Menu>

                    <Nav tabs>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                            >
                            Log In
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                            >
                            Register
                            </NavLink>
                        </NavItem>
                    </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row className="regLogForm">
                            <Col sm="12">
                                <Form inline>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" />
                                    </FormGroup>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" />
                                    </FormGroup>
                                    <Link to="/todo"><Button>Submit</Button></Link>
                                </Form>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row className="regLogForm">
                            <Col sm="12">
                                <Form>
                                    
                                    <Row>
                                        <Col sm="6">
                                            <FormGroup row>
                                            <Label for="exampleText" sm={4}>First Name</Label>
                                            <Col sm={8}>
                                                <Input type="text" name="text" id="exampleText" />
                                            </Col>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="6">
                                            <FormGroup row>
                                            <Label for="exampleText" sm={4}>Surname</Label>
                                            <Col sm={8}>
                                                <Input type="text" name="text" id="exampleText" />
                                            </Col>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    
                                    <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Email</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                    </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Password</Label>
                                    <Col sm={10}>
                                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                    </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Confirm Password</Label>
                                    <Col sm={10}>
                                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                    </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                    <Label for="checkbox2" sm={2}>Checkbox</Label>
                                    <Col sm={{ size: 3 }}>
                                        <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            I am agree!
                                        </Label>
                                        </FormGroup>
                                     </Col>
                                     </FormGroup>

                                    <FormGroup check row>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                        <Link to="/todo"><Button>Submit</Button></Link>
                                    </Col>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
                
            </div>
            </Container>
                    
        );
    }
}

export default Registration;