import './App.css'

import React from 'react'
import BootstrapForm from './components/bootstrapform'
import BootstrapLoginForm from './components/bootstraploginform'
import {Nav, NavItem, Tabs, Tab} from 'react-bootstrap'
import UserList from './components/userlist'
import AddStationForm from './components/addstationform'
import WsList from './components/wslist'

import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let App = React.createClass({

  render() {
    return (
    <div id="main" >
    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Sign Up"><BootstrapForm/></Tab>
      <Tab eventKey={2} title="Login"><BootstrapLoginForm/></Tab>
      <Tab eventKey={3} title="List of users"><UserList/></Tab>
      <Tab eventKey={4} title="Add Weather Station"><AddStationForm/></Tab>
      <Tab eventKey={5} title="List of Weather Stations"><WsList/></Tab>
    </Tabs>
    </div>
  )
  }
});

export default App
