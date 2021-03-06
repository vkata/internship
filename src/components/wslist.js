import React from 'react';
import wsRepository from '../core/repositories/wsrepository';
import {ListGroup, ListGroupItem, Grid, Col, Row, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import ReactHighcharts from 'react-highcharts'
import Map from './map'
import WSPagination from './wspagination'
import Charts from './charts'

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
       list: wsRepository.getDataForPageNr(1, 6, wsRepository.listAllStations),
       page: 1,
       title: "",
       find: ""
     }

     this.wsList = wsRepository.listAllStations();
     this.onClick = this.onClick.bind(this);
     this.populate = this.populate.bind(this);
     this.filterStation = this.filterStation.bind(this);
     this.getSelectedPart = this.getSelectedPart.bind(this);
     this.setPage = this.setPage.bind(this);
   }

   /**
    * saving the page number in the state at pagination onclick
    */
   setPage(p) {
     this.setState({
       page: p
     });
     this.getSelectedPart(p);
   }

   /**
    * getting the selected part of the list from the repo - for the requested page
    */
   getSelectedPart(p) {

     if (this.state.find == "") {
       this.setState({
         list: wsRepository.getDataForPageNr(p, 6, wsRepository.listAllStations())
       });
     }
     else {
       this.setState({
         list: wsRepository.getDataForPageNr(p, 6, wsRepository.findByName(this.state.find))
       });
     }
   }

   /**
    * by clicking on the name of the station from the list, we set the configs
    * for the charts and map
    */
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
       title: e.target.id,
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

   filterStation(name) {

     if (name.target.value == "") {
       this.setState({
         find: name.target.value,
         page: 1
       });
       this.getSelectedPart(1);
     }
     else {
       this.setState({
         find: name.target.value,
         list: wsRepository.findByName(name.target.value)
       });

       this.getSelectedPart(1);
     }
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
              <FormGroup
                controlId="find"
                >
                <ControlLabel>Find station: </ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.find}
                  placeholder="name of the station"
                  onChange={this.filterStation}
                  />
                <FormControl.Feedback />
              </FormGroup>
              <br/>
              <ListGroup>
                {wsList}
              </ListGroup>
            </Col>
            <Col sm={6} md={9}>
              <Map lat={this.state.lat} lng={this.state.lng} title={this.state.title}/>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={3}>
              <WSPagination handle={this.setPage} find={this.state.find}/>
            </Col>

          </Row>
          <Row>
            <Col sm={6} md={3}>
            <p> Charts for the selected station: </p>
            </Col>
            <br/>
            <Col sm={6} md={9}>
              <Charts config={this.state.config} config2={this.state.config2}/>
            </Col>
          </Row>
        </Grid>
        </div>
      );
  }
}

export default WsList;
