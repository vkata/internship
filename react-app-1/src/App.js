import './App.css'

import React from 'react'
import Photo from './components/photo'
import Form from './components/form'
import Table from './components/table'
import List from './components/list'
import NewForm from './components/newform'
import BootstrapForm from './components/bootstrapform'
import BootstrapLoginForm from './components/bootstraploginform'
import {Nav, NavItem, Tabs, Tab} from 'react-bootstrap'
import UserList from './components/userlist'

import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

// let routes = (
//   <Route path='/' handler={App}>
//     <Route name="login" path='/login' handler={BootstrapLoginForm} />
//     <Route name="signup" path='/signup' handler={BootstrapForm} />
//   </Route>
// )

let App = React.createClass({

  render() {
    return (
    <div id="main" >
    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Sign Up"><BootstrapForm/></Tab>
      <Tab eventKey={2} title="Login"><BootstrapLoginForm/></Tab>
      <Tab eventKey={3} title="List of users"><UserList/></Tab>
    </Tabs>
    </div>
  )
  }
});

export default App
