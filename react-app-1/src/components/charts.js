import React from 'react';
import wsRepository from '../core/repositories/wsrepository';
import {ListGroup, ListGroupItem, Grid, Col, Row, Button} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import ReactHighcharts from 'react-highcharts'
import Map from './map'
import WSPagination from './wspagination'

class Charts extends React.Component {

   constructor(props) {
     super(props)

     this.state = {
       config: this.props.config,
       config2: this.props.config2,
     }
   }

   componentWillReceiveProps(nextProps) {
     this.state = {
       config: nextProps.config,
       config2: nextProps.config2,
     }
   }

   render() {

     return(
       <Row>
         <Col sm={6} md={9}>
           <ReactHighcharts config={this.state.config} ref="chart"></ReactHighcharts>
         </Col>
         <Col sm={6} md={9}>
           <br/>
           <ReactHighcharts config={this.state.config2} ref="chart"></ReactHighcharts>
         </Col>
       </Row>
     );
  }
}

 export default Charts;
