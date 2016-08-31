import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert} from 'react-bootstrap';
import wsRepository from '../core/repositories/wsrepository';
import WeatherStation from '../weatherstation'

class AddStationForm extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        user: '',
        station: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    if (e.target.id == "user") {
      this.setState({
        user: e.target.value
      });
    } else if (e.target.id == "station") {
      this.setState({
        station: e.target.value
      })
    }
  }

  handleAdd() {
    console.log(this.state.user + ' ' + this.state.station);

      let ws = new WeatherStation(this.state.user, this.state.station);
      wsRepository.add(ws);
      this.setState({
        user: ''
      });
      this.setState({
        station: ''
      });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="user"
        >
          <ControlLabel> Username of the creator: </ControlLabel>
          <FormControl
            type="text"
            value={this.state.user}
            placeholder="Your username"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock> </HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="station"
        >
          <ControlLabel> Name of the weather station: </ControlLabel>
          <FormControl
            type="text"
            value={this.state.station}
            placeholder="Station name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock> </HelpBlock>
        </FormGroup>

        <Button bsStyle="primary" onClick={this.handleAdd}>Save</Button>
      </form>
    );
  }
}

export default AddStationForm;
