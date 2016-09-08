import React from 'react'
import {Nav, NavItem, Tabs, Tab} from 'react-bootstrap'
import UserList from './userlist'
import AddStationForm from './addstationform'
import WsList from './wslist'
import BigMap from './bigmap'
import Settings from './settings'
import { Router, Route, Link, browserHistory } from 'react-router'
import { DefaultRoute, RouteHandler } from 'react-router';
import session from '../core/session/session'

class Dashboard extends React.Component {
  render() {

    if (session.getCurrentUser() == "")
        browserHistory.push('/login');

    return (
    <div id="main" >
      <p> User: {session.getCurrentUser()} </p>
      <div id="links">
        <Link to="/settings"> Settings </Link>
        <Link to="/login"> Logout </Link>
      </div>
    <Tabs defaultActiveKey={2} id="uncontrolled-tab">
      <Tab eventKey={1} title="Add Weather Station"><AddStationForm/></Tab>
      <Tab eventKey={2} title="List of Weather Stations"><WsList/></Tab>
      <Tab eventKey={3} title="Map with all Weather Stations"><BigMap/></Tab>
    </Tabs>

    </div>
    )
  }
}

export default Dashboard;
