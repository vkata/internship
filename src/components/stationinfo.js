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

/**
 * this is a class for the modals which contain charts of the temperature and humidity
 */

class StationInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      config: config,
      config2: config2,
    };

    this.close = this.close.bind(this);
    this.getConfig = this.getConfig.bind(this);
  }

  /**
   * modal -> onHide event -> method is defined in the parent component
   */
  close() {
    this.props.onClose();
  }

  /**
   * setting the configurations for the charts, we get the data from the repo
   * -> return an object containing config and config2
   */
  getConfig(name) {

    if (!name) {
      return {
        config: {},
        config2: {}
      };
    }
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

  render() {

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
