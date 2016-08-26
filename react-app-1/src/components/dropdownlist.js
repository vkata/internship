import React from 'react';

class DropdownList extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.data == "region") {
      this.state = {
        data: [
          { name: "Uganda" },
          { name: "United States" },
          { name: "United Kingdom" },
          { name: "Tunisia" },
          { name: "Turks and Caicos Islands" }
        ],
      };
    } else
      if (this.props.data == "year") {
        this.state = {
          data: [
            { name: "1960" },
            { name: "1970" },
            { name: "1980" },
            { name: "1990" },
            { name: "2000" }
          ],
        };
      }
      else if (this.props.data == "month") {
        this.state = {
          data: [
            { name: "1" },
            { name: "2" },
            { name: "3" },
            { name: "4" },
            { name: "5" },
            { name: "6" },
            { name: "7" },
            { name: "8" },
            { name: "9" },
            { name: "10" },
            { name: "11" },
            { name: "12" },
          ],
        };
      }
      else if (this.props.data == "day") {
        this.state = {
          data: [
            { name: "1" },
            { name: "2" },
            { name: "3" },
            { name: "4" },
            { name: "5" },
            { name: "6" },
            { name: "7" },
            { name: "8" },
            { name: "9" },
            { name: "10" },
            { name: "11" },
            { name: "12" },
            { name: "...." },
            { name: "30/31" },
          ],
        };
      }
      else
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

  }

  onChange(e) {
    //console.log(e.target.value);
    if (this.props.handle) {
      this.props.handle(this.props.data + " " + e.target.value);
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
        <select id="dropdown" onChange={this.onChange}>
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
