import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        text: "not checked"
      }
      this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log("Checkbox status changed! " + e.target.value);
    if (e.target.value == "on") {
      this.setState({
        text: "checked"
      });
    }
    else {
      this.setState({
        text: "not checked"
      });
    }
  }

  render() {
    return <label><input type="checkbox" checked={this.props.checked} onChange={this.onChange}/> {this.state.text} </label>;
  }
}

export default Checkbox;
