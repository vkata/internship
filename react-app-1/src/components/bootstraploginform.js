import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert} from 'react-bootstrap';
import personValidator from '../personvalidator';
import userRepository from '../core/repositories/userrepository';
import Person from '../person'

class BootstrapLoginForm extends React.Component {
  constructor(props) {
      super(props);

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
          alert("User wants to log in.");
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
      <form>
        <FormGroup
          controlId="user"
          validationState={personValidator.checkUsername(this.state.user)}
        >
          <ControlLabel> Username: </ControlLabel>
          <FormControl
            type="text"
            value={this.state.user}
            placeholder="Your username"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock> </HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="password"
          validationState={personValidator.checkPassword(this.state.password)}
        >
          <ControlLabel> Password: </ControlLabel>
          <FormControl
            type="password"
            value={this.state.password}
            placeholder="Your password"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock> </HelpBlock>
        </FormGroup>

        <Button bsStyle="primary" onClick={this.handleLogin}>Login</Button>
      </form>
    );
  }
}

export default BootstrapLoginForm;
