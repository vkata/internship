import React from 'react'
import {ListGroup, ListGroupItem, Grid, Col, Row, Button, Modal} from 'react-bootstrap'
import Charts from './charts'
import wsRepository from '../core/repositories/wsrepository';

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

class StationInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      config: config,
      config2: config2,
    };

    this.close = this.close.bind(this);
    // this.open = this.open.bind(this);
    this.getConfig = this.getConfig.bind(this);
  }

  close() {
    this.props.onClose();
  }

  getConfig(name) {

    if (!name) {
      return {
        config: {},
        config2: {}
      };
    }
    console.log(name);
    config = {
      title: {
                text: "Temperature at " + name
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
                text: "Humidity at: " + name
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

    config.series[0].data = wsRepository.getStationByName(name).getTempList();
    config.title.text = "Temperature at " + name;

    config2.series[0].data = wsRepository.getStationByName(name).getHumList();
    config2.title.text = "Humidity at " + name;

    return {
      config: config,
      config2: config2
    }
  }

  // open() {
  //   // this.setState({
  //   //   showModal: true
  //   // });
  // }

  // componentWillMount() {
  //     // this.setState({
  //     //   showModal: this.props.show
  //     // });
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   // this.setState({
  //   //   showModal: nextProps.show,
  //   //   station: nextProps.station
  //   // });
  // }

  render() {

    console.log(this.props.station);
    console.log(this.props.show);

    var m = this.getConfig(this.props.station);

    return (
      <div>

        <Modal show={this.props.show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Charts</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Charts config={m.config} config2={m.config2}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default StationInfo
