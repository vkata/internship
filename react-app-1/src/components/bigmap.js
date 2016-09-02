import React from 'react'
import wsRepository from '../core/repositories/wsrepository';
import {Button} from 'react-bootstrap'

const START = {
  lat: 65.108539,
  lng: -113.506660
};

class BigMap extends React.Component {
  constructor(props) {
    super(props);
    this.marker = [];
    this.infowindow = [];

    this.state = {
      list: []
    }

    this.onClick = this.onClick.bind(this);
    this.allStations = this.allStations.bind(this);
  }

  onClick() {
    // this.setState({
    //   list: wsRepository.listAllStations(),
    // })
    //
    // console.log(this.state.list);
    this.allStations();
  }

  allStations() {

    console.log("Start: " + START.lat);
    this.bigmap = new google.maps.Map(this.refs.bigmap, {
      center: START,
      zoom: 3
    });

    let list = wsRepository.listAllStations();

    console.log("all stations should appear !! " + list.length);

    for (let i = 0; i<list.length; i++) {
      console.log(list[i].getName());
      let pos = {
        lat: parseFloat(list[i].getLat()),
        lng: parseFloat(list[i].getLng())
      };

      console.log(pos);

      this.marker[i] = new google.maps.Marker({
            position: pos,
            map: this.bigmap,
            title: 'I\'m here!'
          });
        console.log('new marker added');
        
        this.bigmap.setCenter(this.marker[i].getPosition());
      }

  }

  componentDidMount() {

    this.allStations();
    // console.log("Start: " + START.lat);
    // this.bigmap = new google.maps.Map(this.refs.bigmap, {
    //   center: START,
    //   zoom: 3
    // });
    //
    // let list = wsRepository.listAllStations();

    // console.log("all stations should appear !! " + list.length);
    //
    // for (let i = 0; i<list.length; i++) {
    //   console.log(list[i].getName());
    //   let pos = {
    //     lat: list[i].getLat(),
    //     lng: list[i].getLng()
    //   };
    //
    //   console.log(pos);
    //
    //   this.marker[i] = new google.maps.Marker({
    //         position: pos,
    //         map: this.bigmap,
    //         title: 'I\'m here!'
    //       });
    //     console.log('new marker added');
    //
    //     this.infowindow[i] = new google.maps.InfoWindow({
    //       content: "CONTENT OF THIS INFO WINDOW",
    //       maxWidth: 200
    //     });
    //
    //     this.marker[i].addListener('click', function() {
    //       this.infowindow[i].open(this.bigmap, this.marker[i]);
    //     });
    //   }
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
