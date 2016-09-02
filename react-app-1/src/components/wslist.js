import React from 'react';
import wsRepository from '../core/repositories/wsrepository';
import {ListGroup, ListGroupItem, Grid, Col, Row, Button} from 'react-bootstrap'
import Highlight from 'react-highlight'
import ReactDOM from 'react-dom'
import ReactHighcharts from 'react-highcharts'
import Map from './map'
import WSPagination from './wspagination'

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
       lng: 24.745900,
       list: [],
       page: 1
     }

     this.wsList = wsRepository.listAllStations();
     this.onClick = this.onClick.bind(this);
     this.populate = this.populate.bind(this);

     this.getSelectedPart = this.getSelectedPart.bind(this);
     this.setPage = this.setPage.bind(this);
   }

   setPage(p) {
     this.setState({
       page: p
     });
     this.getSelectedPart(p);
   }

   getSelectedPart(p) {

     this.setState({
       list: wsRepository.getDataForPageNr(p, 5)
     });
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

     console.log("this has to be saved: " + lat + " " + lng);

     this.setState({
       config: config,
       lat: lat,
       lng: lng
     });

     console.log("this IS saved: " + this.state.lat + " " + this.state.lng + "\n----------------");

     this.getSelectedPart(this.state.page);
   }

   populate() {
      wsRepository.populate();

      this.setState({
        list: wsRepository.listAllStations()
      });
      this.getSelectedPart(1);
   }

   render() {
     let wsList = [];

      for (let i = 0; i < this.state.list.length; i++) {
        wsList.push(
            <ListGroupItem key={i} id={this.state.list[i].name} onClick={this.onClick}>
              {this.state.list[i].name}
            </ListGroupItem>
        );
      }

      // console.log(wsList);

      return (
        <div id="wslist">
        <br/>
        <Grid>
          <Row>

          <Col sm={6} md={3}>
            <Button onClick={this.populate}>Populate stations</Button>
            <ListGroup>
              {wsList}
            </ListGroup>
            <WSPagination handle={this.setPage}/>
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
