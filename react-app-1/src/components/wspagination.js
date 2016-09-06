import React from 'react'
import {Pagination} from 'react-bootstrap'
import wsRepository from '../core/repositories/wsrepository';

class WSPagination extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    }
    this.handleSelect = this.handleSelect.bind(this);
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

    let itemsNr = wsRepository.howMany();
    let pagesNr = Math.floor(wsRepository.howMany() / 8);
    if (wsRepository.howMany() % 8 > 0) {
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
