import React from 'react'
import wsRepository from '../core/repositories/wsrepository';
import {Button} from 'react-bootstrap'

const START = {
  lat: 46.317399,
  lng: 24.745900
};

class BigMap extends React.Component {
  constructor(props) {
    super(props);
    this.marker = [];
    this.infowindow = [];

    this.state = {
      lat: START.lat,
      lng: START.lng,
      zoom: 6
    }

    this.state = {
      list: []
    }

    this.onClick = this.onClick.bind(this);
    this.allStations = this.allStations.bind(this);
  }

  onClick() {

    this.bigmap = new google.maps.Map(this.refs.bigmap, {
      center: START,
      zoom: 3
    });

    this.allStations();
  }

  allStations() {

    let list = wsRepository.listAllStations();

    for (let i = 0; i<list.length; i++) {
      // console.log(list[i].getName());
      let pos = {
        lat: parseFloat(list[i].getLat()),
        lng: parseFloat(list[i].getLng())
      };

      this.marker[i] = new google.maps.Marker({
            position: pos,
            map: this.bigmap,
            title: 'I\'m here!'
          });
        // console.log('new marker added');
        this.bigmap.setCenter(this.marker[i].getPosition());
      }
  }

  componentDidMount() {

    this.bigmap = new google.maps.Map(this.refs.bigmap, {
      center: START,
      zoom: 3
    });

    this.allStations();
  }

  render() {

    
    const mapStyle = {
      height: 700,
      border: '1px solid black'
    };

    return (
      <div>
        <div ref="bigmap" style={mapStyle}>I should be a map!</div>
        <Button onClick={this.onClick}>Refresh</Button>
      </div>
    );
  }
}

export default BigMap;
