import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert, Form, Col, Pager} from 'react-bootstrap';
import personValidator from '../personvalidator';
import userRepository from '../core/repositories/userrepository';
import Person from '../person'
import { Router, Route, Link, browserHistory } from 'react-router'
import session from '../core/session/session'

class BootstrapLoginForm extends React.Component {

  constructor(props) {
      super(props);
      session.setCurrentUser("");
      this.state = {
        user: '',
        password: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    if (e.target.id == "user") {
      this.setState({
        user: e.target.value
      });
    } else if (e.target.id == "password") {
      this.setState({
        password: e.target.value
      })
    }
  }

  handleLogin() {
       if (userRepository.login(this.state.user, this.state.password)) {
          session.setCurrentUser(this.state.user);

          console.log("user is saved in session");

          browserHistory.push('/dashboard');

      } else {

        console.log(userRepository.listAllUsers());

        alert("Incorrect username or password!");
        this.setState({
          user: ''
        });
        this.setState({
          password: ''
        });
      }
  }

  render() {
    return (
      <Pager>
      <Pager.Item>
      <Form>
        <FormGroup
          controlId="user"
        >
          <ControlLabel> Username: </ControlLabel>
          <FormControl
            type="text"
            value={this.state.user}
            placeholder="Your username"
            onChange={this.handleChange}/>
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="password"
        >
          <ControlLabel> Password: </ControlLabel>
          <FormControl
            type="password"
            value={this.state.password}
            placeholder="Your password"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />

        </FormGroup>
          <Button bsStyle="primary" onClick={this.handleLogin}>Login</Button>
          <Link to="/signup"> Sign Up </Link>
       </Form>
       </Pager.Item>
       </Pager>
    );
  }
}


export default BootstrapLoginForm;
