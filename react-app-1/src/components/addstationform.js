import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert} from 'react-bootstrap';
import wsRepository from '../core/repositories/wsrepository';
import WeatherStation from '../weatherstation'
import userRepository from '../core/repositories/userrepository';

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
    console.log(e.target.id);
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
    this.userList = userRepository.listAllUsers();
    let list = [];

     for (let i = 0; i < this.userList.length; i++) {
       list.push(
           <option>
             {this.userList[i].username}
           </option>
       );
     }

    return (
      <form>
        <FormGroup
          controlId="user"
        >
          <ControlLabel> Username of the creator: </ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            {list}
          </FormControl>
          {/* <UserSelect onChange={this.handleChange}/> */}
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
