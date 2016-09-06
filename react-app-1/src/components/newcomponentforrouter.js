import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { IndexRoute } from 'react-router'
import { Redirect } from 'react-router'

class Dashboard extends React.Component {
  render() {
    return <div>Welcome to the app!</div>
  }
}

class Appp extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class About extends React.Component {
  render() {
    return <h3>About</h3>
  }
}

class Inbox extends React.Component{
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}

class Message extends React.Component {
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
}

class NewClass extends React.Component {
render() {

  return (
    <Router>
    <Route path="/" component={Appp}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />

      <Route path="inbox" component={Inbox}>
        {/* Redirect /inbox/messages/:id to /messages/:id */}
        <Redirect from="messages/:id" to="/messages/:id" />
      </Route>

      <Route component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
  )
  }
}

export default NewClass
