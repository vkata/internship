import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert, Nav, NavItem, Row, Col, Tabs, Tab} from 'react-bootstrap';
import personValidator from '../core/model/personvalidator';
import userRepository from '../core/repositories/userrepository';
import Person from '../core/model/person'
import BootstrapForm from '../components/bootstrapform'
import session from '../core/session/session'
import { Router, Route, Link, browserHistory } from 'react-router'

class Settings extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        user: session.getCurrentUser(),
        fullname: '',
        email: '',
        gender: '',
        password: '',
        password2: '',
        toShow: 1
      }
  }

  /**
   * for this we use the same form as we used for the registration,
   * we set the user props -> contains the name of the user which is currently
   * logged in
   */
  render() {

    if (session.getCurrentUser() == "")
        browserHistory.push('/login');
    return (
      <div>
        <p> User: {session.getCurrentUser()} </p>
        <div id="links">
          <Link to="/settings"> Settings </Link>
          <Link to="/login"> Logout </Link>
        </div>
        <p> Change your personal data </p>
        <BootstrapForm user={session.getCurrentUser()} />

      </div>
    );
  }
}

export default Settings;
