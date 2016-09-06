import './App.css'

import React from 'react'
import BootstrapForm from './components/bootstrapform'
import BootstrapLoginForm from './components/bootstraploginform'
import {Nav, NavItem, Tabs, Tab} from 'react-bootstrap'
import UserList from './components/userlist'
import AddStationForm from './components/addstationform'
import WsList from './components/wslist'
import BigMap from './components/bigmap'
import NewClass from './components/newcomponentforrouter'
import Dashboard from './components/dashboard'
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Routes from './core/routes'

let App = React.createClass({

  // render() {
  //   return (
  //   <div id="main" >
  //   <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
  //     <Tab eventKey={1} title="Sign Up"></Tab>
  //     <Tab eventKey={2} title="Login"><Link to="/login">Login</Link></Tab>
  //     <Tab eventKey={3} title="Dashboard"><Dashboard/></Tab>
  //     <Tab eventKey={4} title="List of users"><UserList/></Tab>
  //     <Tab eventKey={5} title="Add Weather Station"><AddStationForm/></Tab>
  //     <Tab eventKey={6} title="List of Weather Stations"><WsList/></Tab>
  //     <Tab eventKey={7} title="Map with all Weather Stations"><BigMap/></Tab>
  //     <Tab eventKey={8} title="New Component"><NewClass/></Tab>
  //   </Tabs>
  //   </div>
  // )
  // }
  render() {
    return(
      <Routes/>
    )
  }
});

export default App
