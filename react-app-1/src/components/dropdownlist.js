import React from 'react';

class DropdownList extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.data == "gender") {
        this.state = {
          data: [
            { name: "male" },
            { name: "female" },
            { name: "not specified" }
          ],
        };
      }
    this.onChange = this.onChange.bind(this);
    this.deleteErrMess = this.deleteErrMess.bind(this);
  }

  onChange(e) {
    if (this.props.handle) {
      this.props.handle(this.props.data + " " + e.target.value);
    }
  }

  deleteErrMess(e) {
    if (this.props.handle) {
      this.props.handle(e);
    }
  }

  render() {
    let dataList = [];
    for (let i = 0; i < this.state.data.length; i++) {
      dataList.push(
          <Item
            data = {this.state.data[i]}
          />
      );
    }
    return (
      <div>
        <select id="dropdown" onChange={this.onChange} onClick={this.deleteErrMess}>
          {dataList}
        </select>
      </div>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<option>{this.props.data.name}</option>);
  }
}

export default DropdownList;
