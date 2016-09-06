import React from 'react'
import {Pagination} from 'react-bootstrap'
import userRepository from '../core/repositories/userrepository';

class ListPagination extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    }
    this.list = this.props.listLength;
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

    let itemsNr = userRepository.howMany();
    let pagesNr = Math.floor(userRepository.howMany() /11);
    if (userRepository.howMany() % 11 != 0) {
      pagesNr++;
    }

    return (
      <Pagination
        prev
        next
        first
        last
        items={pagesNr}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    );
  }
}

export default ListPagination;
