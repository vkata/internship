import React from 'react'
import wsRepository from '../core/repositories/wsrepository';
import {Button} from 'react-bootstrap'
import StationInfo from './stationinfo'
import session from '../core/session/session'
import { Router, Route, Link, browserHistory } from 'react-router'


const START = {
  lat: 46.317399,
  lng: 24.745900
};

class BigMap extends React.Component {
  constructor(props) {
    super(props);
    this.marker = [];

    this.state = {
      lat: START.lat,
      lng: START.lng,
      zoom: 6,
    }

    this.onClick = this.onClick.bind(this);
    this.allStations = this.allStations.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClick() {
    this.bigmap = new google.maps.Map(this.refs.bigmap, {
      center: START,
      zoom: 3
    });
    this.allStations();
  }

  /**
   * listing all stations, creaating a marker on the map for each
   */
  allStations() {

    let list = wsRepository.listAllStations();

    for (let i = 0; i<list.length; i++) {
      let pos = {
        lat: parseFloat(list[i].getLat()),
        lng: parseFloat(list[i].getLng())
      };

      /**
       * adding marker for the i-th station
       */
      this.marker[i] = new google.maps.Marker({
            position: pos,
            map: this.bigmap,
            title: list[i].getName()
          });

      this.bigmap.setCenter(this.marker[i].getPosition());

      let self = this;

      /**
       * adding listener to the marker -> onClick -> modal appears with charts
       */
      this.marker[i].addListener('click', () => {
        console.log("the modal should appear for " + list[i].getName());
        this.setState({
          station: list[i].getName(),
          show: true
        });
      });
      }
  }

  componentDidMount() {
    this.bigmap = new google.maps.Map(this.refs.bigmap, {
      center: START,
      zoom: 3
    });

    this.allStations();
  }

  /**
   * closing the modal with the charts
   */
  onClose() {
    this.setState({
      show: false
    })
  }

  render() {
    /**
     * if there is no user logged in, go back to the login page
     */
    if (session.getCurrentUser() == "")
        browserHistory.push('/login');

    const mapStyle = {
      height: 700,
      border: '1px solid black'
    };

    return (
      <div>
        <div ref="bigmap" style={mapStyle}>I should be a map!</div>
        <StationInfo station={this.state.station} show={this.state.show} onClose={this.onClose}/>
        <Button onClick={this.onClick}>Refresh</Button>
      </div>
    );
  }
}

export default BigMap;
