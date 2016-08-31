import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert} from 'react-bootstrap';
import wsRepository from '../core/repositories/wsrepository';
import WeatherStation from '../weatherstation'

class AddTempForm extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        station: '',
        newtemp: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {

  }

  handleAdd() {

  }

  render() {

  }
}

export default AddTempForm;
