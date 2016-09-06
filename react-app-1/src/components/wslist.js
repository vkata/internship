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

let config2 = {
  title: {
            text: "Weather Station"
        }
};

class WsList extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       config: config,
       config2: config2,
       lat: 46.317399,
       lng: 24.745900,
       list: wsRepository.getDataForPageNr(1, 8),
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
       list: wsRepository.getDataForPageNr(p, 8)
     });
   }

   onClick(e) {

     config = {
       title: {
                 text: "Temperature at " + e.target.id
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
         data: []
       }]
     };
     config2 = {
       title: {
                 text: "Humidity at: " + e.target.id
             },
       xAxis: {
               title: {
                   text: 'Time'
                 }
       },
       yAxis: {
                 title: {
                     text: 'Humidity'
                 }
             },
       series: [{
         data: []
       }]
     };

     config.series[0].data = wsRepository.getStationByName(e.target.id).getTempList();
     config.title.text = "Temperature at " + e.target.id;

     config2.series[0].data = wsRepository.getStationByName(e.target.id).getHumList();
     config2.title.text = "Humidity at " + e.target.id;

     let lat = wsRepository.getStationByName(e.target.id).getLat();
     let lng = wsRepository.getStationByName(e.target.id).getLng();

     this.setState({
       config: config,
       config2: config2,
       lat: lat,
       lng: lng,
     });

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

      return (
        <div id="wslist">
        <br/>
        <Grid>
          <Row>

          <Col sm={6} md={3}>
            <Button onClick={this.populate}> Populate stations </Button>
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
            <WSPagination handle={this.setPage}/>
          </Col>
          <Col sm={6} md={9}>
            <br/>
            <ReactHighcharts config={config2} ref="chart"></ReactHighcharts>

          </Col>
          </Row>
          <Row>
            <Col sm={6} md={3}>

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

export default WsList;
