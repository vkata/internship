import React from 'react';
import DropdownList from './dropdownlist'
import Checkbox from './checkbox'
import Photo from './photo'
import Button from './button'

class NewForm extends React.Component {
  constructor(props) {
      super(props);
      this.state= {
        first: '',
        last: '',
        user: '',
        pass: '',
        repass: '',
        err: 'Something should happen if you click the button!!!',
        message: 'Your name will appear to your friends.',
        year: '',
        month: '',
        day: '',
        gender: '',
        region: '',
        cat: ''
      }
      this.onChange = this.onChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.getDataFromChild = this.getDataFromChild.bind(this);
      this.clickMe = this.clickMe.bind(this);
  }

  getDataFromChild(data) {
      console.log("data from child component: " + data);
      var result = data.substr(data.indexOf(" ") + 1);
      console.log(result);
      var arr = data.split(" ");
      if (arr[0] == "gender") {
          console.log("save gender to state");
          this.setState({
            gender: result
          });
          console.log(this.state.gender);
      }
      if (arr[0] == "year") {
          console.log("save year to state");
          this.setState({
            year: result
          });
          console.log(this.state.year);
      }
      if (arr[0] == "month") {
          console.log("save month to state");
          this.setState({
            month: result
          });
          console.log(this.state.month);

      }
      if (arr[0] == "day") {
          console.log("save day to state");
          this.setState({
            day: result
          });
          console.log(this.state.day);

      }
      if (arr[0] == "region") {
          console.log("save region to state");
          this.setState({
            region: result
          });
          console.log(this.state.region);
      }
  }

  onClick() {
      console.log("state of the parent: " + this.state.first + " " + this.state.last + " " + this.state.year + " etc.");
  }

  clickMe() {
    this.setState({
      cat: "I knew you like cats."
    });
  }

  onChange(e) {
    console.log(e.target.id);

    if (e.target.id == 'first') {
      this.setState({
        first: e.target.value
      });
    }
    if (e.target.id == 'last') {
      this.setState({
        last: e.target.value
      });
    }
    if (e.target.id == 'user') {
      this.setState({
        user: e.target.value
      });
    }
    if (e.target.id == 'fullname')
      this.setState({
        fullname: e.target.value
      });
    if (e.target.id == 'email')
      this.setState({
        email: e.target.value
      });
    if (e.target.id == 'pass')
      this.setState({
        pass: e.target.value
      });
    if (e.target.id == 'repass')
      this.setState({
        repass: e.target.value
      });
  }

  render() {
    return (
      <div id="form" >
        <table>

          <tr>
            <th><label>First name: </label></th>
            <th><label>Last name: </label></th>
          </tr>
            <th><input id="first" type="text" value={this.state.first} onChange={this.onChange}></input></th>
            <th><input id="last" type="text" value={this.state.last} onChange={this.onChange}></input><br/><br/></th>
          <tr>
            <th><label>User: </label></th>
          </tr>
          <tr>
            <th><input id="user" type="email" value={this.state.user} onChange={this.onChange}></input><br/><br/></th>
          </tr>
          <tr>
            <th><label>Password: </label></th>
          </tr>
          <tr>
            <th><input id="pass" type="password" value={this.state.pass} onChange={this.onChange}></input><br/><br/></th>
          </tr>
          <tr>
            <th><label>Reenter password: </label></th>
          </tr>
          <tr>
            <th><input id="repass" type="password" value={this.state.repass} onChange={this.onChange}></input><br/><br/></th>
          </tr>
          <tr>
            <th><label>Country/Region: </label></th>
          </tr>
          <tr>
            <th><DropdownList data="region" handle={this.getDataFromChild}/></th>
          </tr>
          <tr>
            <th><label>Birthdate</label></th>
          </tr>
          <tr>
            <th><label><DropdownList data="year" handle={this.getDataFromChild}/></label></th>
            <th><label><DropdownList data="month" handle={this.getDataFromChild}/></label></th>
            <th><label><DropdownList data="day" handle={this.getDataFromChild}/></label></th>
          </tr>
          <tr>
            <th><label>Gender</label></th>
          </tr>
          <tr>
            <th><label><DropdownList data="gender" handle={this.getDataFromChild}/></label></th>
          </tr>
          <tr>
            <p>Do you like this picture?</p>
          </tr>
            <th><Photo id="img2" caption="img" src="http://www.funnycatpix.com/_pics/cat_yes.jpg"/></th>
            <th><Button id="small" text="Yes." onClick={this.clickMe}/></th>
            <th><Button id="small" text="Yeeeeees." onClick={this.clickMe}/></th>
          <tr>
            <th><p>{this.state.cat} </p></th>
          </tr>
          <tr>
            <th><Checkbox /></th>
          </tr>
          <tr>
            <Button id="larger" text="Oookay, let's see what happens if you click me" onClick={this.onClick}/>
          </tr>
          <tr>
            <p> {this.state.first} {this.state.last} {this.state.gender} {this.state.year} {this.state.month} {this.state.day}</p>
          </tr>

        </table>
      </div>
    )
  }
}

export default NewForm;
