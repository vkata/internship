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

render() {
    return(
      <Routes/>
    )
  }
});

export default App
