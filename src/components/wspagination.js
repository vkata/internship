import React from 'react'
import {Pagination} from 'react-bootstrap'
import wsRepository from '../core/repositories/wsrepository';

class WSPagination extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      find: ""
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.setState({
      find: nextProps.find
    });
    return true;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      find: nextProps.find
    });
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
    if (this.props.handle) {
      this.props.handle(eventKey);
    }
  }

  render() {

    // let itemsNr = wsRepository.howMany();
    // let pagesNr = Math.floor(wsRepository.howMany() / 6);
    // if (wsRepository.howMany() % 6 > 0) {
    //   pagesNr++;
    // }

    let itemsNr = wsRepository.findByName(this.state.find).length;
    let pagesNr = Math.floor(itemsNr / 6);
    if (itemsNr % 6 > 0) {
      pagesNr++;
    }

    return (
      <Pagination
        prev
        next
        first
        last
        items={pagesNr}
        maxButtons={2}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    );
  }
}

export default WSPagination;
