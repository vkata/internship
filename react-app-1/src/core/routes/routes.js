import React from 'react';
import {Router, IndexRoute, Provider, browserHistory, Route } from 'react-router';
import App from '../../App'
import Dashboard from '../../components/dashboard'
import BootstrapForm from '../../components/bootstrapform'
import BootstrapLoginForm from '../../components/bootstraploginform'
import UserList from '../../components/userlist'
import AddStationForm from '../../components/addstationform'
import WsList from '../../components/wslist'
import BigMap from '../../components/bigmap'
import Settings from '../../components/settings'

const routes = (
      <Route component={App}>
         <Route path="/" component={BootstrapLoginForm} />
           <Route path="login" component={BootstrapLoginForm} />
           <Route path="dashboard" component={Dashboard} />
           <Route path="signup" component={() => (<BootstrapForm user="" />)}/> />
           <Route path="users" component={UserList} />
           <Route path="stations" component={WsList} />
           <Route path="addstation" component={AddStationForm} />
           <Route path="map" component={BigMap} />
           <Route path="settings" component={Settings} />
       </Route>
);

class Routes extends React.Component {
    render() {

    return (
      <Router history={browserHistory} createElement={this.createElement}>
        {routes}
      </Router>
    )
  }
}

export default Routes;
