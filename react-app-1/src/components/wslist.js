import React from 'react';
import wsRepository from '../core/repositories/wsrepository';
import {ListGroup, ListGroupItem, Grid, Col, Row} from 'react-bootstrap'
import Highlight from 'react-highlight'
import ReactDOM from 'react-dom'
import ReactHighcharts from 'react-highcharts'
import Map from './map'

let config = {
  title: {
            text: "Weather Station"
        }
};

class WsList extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       config: config,
       lat: 46.317399,
       lng: 24.745900
     }

     this.wsList = wsRepository.listAllStations();
     this.onClick = this.onClick.bind(this);
   }

   onClick(e) {

     config = {
       title: {
                 text: e.target.id
             },
       xAxis: {
               title: {
                   text: 'Time'
                 }
       },
       yAxis: {
                 title: {
                     text: 'Temperature'
                 }
             },
       series: [{
         data: [5,6,7]
       }]
     };
     config.series[0].data = wsRepository.getStationByName(e.target.id).getTempList();
     config.title.text = e.target.id;

     let lat = wsRepository.getStationByName(e.target.id).getLat();
     let lng = wsRepository.getStationByName(e.target.id).getLng();

     console.log(lat + " " + lng);

     this.setState({
       config: config,
       lat: lat,
       lng: lng
     })
   }

   render() {
     let wsList = [];

      for (let i = 0; i < this.wsList.length; i++) {
        wsList.push(
            <ListGroupItem key={i} id={this.wsList[i].name} onClick={this.onClick}>
              {this.wsList[i].name}
            </ListGroupItem>
        );
      }

      return (
        <div id="wslist">
        <br/>
        <Grid>
          <Row>
          <Col sm={6} md={3}>
            <ListGroup>
              {wsList}
            </ListGroup>
          </Col>
          <Col sm={6} md={9}>
            <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
          </Col>
          </Row>
          <Row>
          <Col sm={6} md={3}>
            {/*  */}
          </Col>
          <Col sm={6} md={9}>
            <br/>
            <Map lat={this.state.lat} lng={this.state.lng}/>
          </Col>
          </Row>
        </Grid>

        </div>
      );
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<li>{this.props.station.name}</li>);
  }
}

export default WsList;
