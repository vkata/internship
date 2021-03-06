import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert, Pager} from 'react-bootstrap';
import personValidator from '../core/model/personvalidator';
import userRepository from '../core/repositories/userrepository';
import Person from '../core/model/person'
import { Router, Route, Link, browserHistory } from 'react-router'

class BootstrapForm extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        user: this.props.user,
        fullname: '',
        email: '',
        gender: '',
        password: '',
        password2: ''
      }
      console.log(this.props.user);
      this.handleChange = this.handleChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
  }

  /**
   * depending on the id of the target element, the values are saved in the state
   */
  handleChange(e) {
    if (e.target.id == "user") {
      this.setState({
        user: e.target.value
      });
    } else if (e.target.id == "fullname") {
      this.setState({
        fullname: e.target.value
      })
    } else if (e.target.id == "email") {
      this.setState({
        email: e.target.value
      })
    } else if (e.target.id == "gender") {
      this.setState({
        gender: e.target.value
      })
    } else if (e.target.id == "password") {
      this.setState({
        password: e.target.value
      })
    } else if (e.target.id == "password2") {
      this.setState({
        password2: e.target.value
      })
    }
  }

 /**
  * when we click on the Save button the values saved in the state are
  * validated
  * if the form is used for registration -> new user is saved in the repository
  * else if the form is used for updating data -> element in the repo is updated
  */
  handleSave() {
    if (this.props.user == "") {
      /**
       * firstly we check if the two passwords match or not, if not ->
       * we don't need to save nor to update
       */
      if (this.state.password == this.state.password2) {
        if (personValidator.validate(this.state.user, this.state.fullname, this.state.password, this.state.email, this.state.gender))
        {
          /**
           * new person -> save
           */
          let p = new Person(this.state.user, this.state.fullname, this.state.password, this.state.email, this.state.gender);
          console.log("save user");
          userRepository.save(p);
          alert("Signing up was successful!");
          this.setState({
            password2: ''
          });
          this.setState({
            password: ''
          });
          this.setState({
            user: ''
          });
          this.setState({
            fullname: ''
          });
          this.setState({
            email: ''
          });
          this.setState({
            gender: ''
          });

        }
      }
      else {
        this.setState({
          password2: ''
        });
        this.setState({
          password: ''
        });
        alert("Passwords do not match!");
      }
    }
    /**
     * existing person -> update
     */
    else {
      if (this.state.password == this.state.password2) {
        if (personValidator.validate(this.props.user, this.state.fullname, this.state.password, this.state.email, this.state.gender))
        {
          console.log("update user");
          userRepository.updateUser(this.props.user, this.state.fullname, this.state.email, this.state.password, this.state.gender);
          alert("Updating your data was successful!");
        }
      }
    }
  }

  render() {
    return (
      <form>
      <Pager>
      <Pager.Item>
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
            disabled={this.props.user != ""}
          />
          <FormControl.Feedback />
          <HelpBlock> </HelpBlock>
        </FormGroup>


        <FormGroup
          controlId="fullname"
          validationState={personValidator.checkFullname(this.state.fullname)}
        >
          <ControlLabel> Full Name: </ControlLabel>
          <FormControl
            type="text"
            value={this.state.fullname}
            placeholder="Your full name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock> </HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="email"
          validationState={personValidator.checkEmail(this.state.email)}
        >
          <ControlLabel> Email: </ControlLabel>
          <FormControl
            type="email"
            value={this.state.email}
            placeholder="Your email address"
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

        <FormGroup
          controlId="password2"
          validationState={personValidator.checkPassword(this.state.password2)}
        >
          <ControlLabel> Password again: </ControlLabel>
          <FormControl
            type="password"
            value={this.state.password2}
            placeholder="Your password again"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock> </HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="gender"
          validationState={personValidator.checkGender(this.state.gender)}>

          <ControlLabel> Gender: </ControlLabel>
          <FormControl
            componentClass="select"
            placeholder="Gender"
            onChange={this.handleChange}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="not specified">not specified</option>
          </FormControl>
        </FormGroup>

        <Button bsStyle="primary" onClick={this.handleSave}> Save </Button>

        <Link to="/login" hidden={this.props.user != ""}> Back to Login </Link>
        <Link to="/dashboard" hidden={this.props.user == ""}> Back to Dashboard </Link>
      </Pager.Item>
      </Pager>
      </form>
    );
  }
}

export default BootstrapForm;
