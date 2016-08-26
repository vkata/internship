import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log("child: onclick should do something");
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return <button id={this.props.id} onClick={this.onClick}> {this.props.text} </button>;
  }
}

export default Button;
