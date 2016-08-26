import React from 'react';

class Photo extends React.Component {
  render() {
    return <img id={this.props.id} alt={this.props.caption} src={this.props.src}/>;
  }
}

export default Photo;
