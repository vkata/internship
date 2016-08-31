import React from 'react';
import wsRepository from '../core/repositories/wsrepository';
import {ListGroup, ListGroupItem, Grid, Col} from 'react-bootstrap'
import Highlight from 'react-highlight'
import ReactDOM from 'react-dom'
import ReactHighcharts from 'react-highcharts'

let config = {
  title: {
            text: "Weather Station"
        }
};

class WsList extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       config: config
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

     this.setState({
       config: config
     })
   }

   render() {
     let wsList = [];

      for (let i = 0; i < this.wsList.length; i++) {
        wsList.push(
            <ListGroupItem id={this.wsList[i].name} onClick={this.onClick}>
              {this.wsList[i].name}
            </ListGroupItem>
        );
      }

      return (
        <div id="wslist">
        <br/>
        <br/>
        <Grid>
          <Col md={2}>
            <ListGroup>
              {wsList}
            </ListGroup>
          </Col>
          <Col md={10}>
            <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
          </Col>
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
