import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert, Pager} from 'react-bootstrap';
import wsRepository from '../core/repositories/wsrepository';
import WeatherStation from '../weatherstation'
import userRepository from '../core/repositories/userrepository';
import coordValidator from '../coordvalidator';
import session from '../core/session/session'

class AddStationForm extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        user: '',
        station: '',
        lat: 0,
        lng: 0
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    console.log(e.target.id);
    if (e.target.id == "user") {
      this.setState({
        user: e.target.value
      });
    } else if (e.target.id == "station") {
      this.setState({
        station: e.target.value
      })
    } else if (e.target.id == "lat") {
      this.setState({
        lat: e.target.value
      })
    } else if (e.target.id == "lng") {
      this.setState({
        lng: e.target.value
      })
    }
  }

  handleAdd() {
      let ws = new WeatherStation(this.state.user, this.state.station, this.state.lat, this.state.lng);
      wsRepository.add(ws);
      alert("Adding new weather station was successful!");
      this.setState({
        user: ''
      });
      this.setState({
        station: ''
      });
      this.setState({
        lat: 0
      });
      this.setState({
        lng: 0
      })
  }

  render() {
    this.userList = userRepository.listAllUsers();
    let list = [];

     for (let i = 0; i < this.userList.length; i++) {
       list.push(
           <option key={i}>
             {this.userList[i].username}
           </option>
       );
     }

    return (
      <form id="addstation">
      <Pager>
      <Pager.Item>
        <FormGroup
          controlId="user"
        >
          <ControlLabel> Username of the creator: {session.getCurrentUser()}</ControlLabel>
          <FormControl
            type="text"
            value={session.getCurrentUser()}
            disabled
          />
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

        <FormGroup
          controlId="lat"
          validationState={coordValidator.checkCoord(this.state.lat)}
        >
          <ControlLabel> lat: </ControlLabel>
          <FormControl
            type="number"
            value={this.state.lat}
            placeholder="lat"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock> </HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="lng"
          validationState={coordValidator.checkCoord(this.state.lng)}
        >
          <ControlLabel> lng: </ControlLabel>
          <FormControl
            type="number"
            value={this.state.lng}
            placeholder="lng"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock> </HelpBlock>
        </FormGroup>

        <Button bsStyle="primary" onClick={this.handleAdd}>Save</Button>
      </Pager.Item>
      </Pager>
      </form>
    );
  }
}

export default AddStationForm;
