import './App.css'

import React from 'react'
import Photo from './components/photo'
import Form from './components/form'
import Table from './components/table'
import List from './components/list'
import NewForm from './components/newform'

let App = React.createClass({
  render() {

    return (
    <div id="main" className="App">
      <p id="title"> Required information </p>
      <Form />
    </div>
  )
  }
})

export default App
