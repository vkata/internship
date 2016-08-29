import React from 'react';
import DropdownList from './dropdownlist'
import Person from '../person';
import PersonValidator from '../personvalidator';

class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state= {
        user: '',
        fullname: '',
        email: '',
        pass: '',
        gender: ''
      }

      this.errUser = "You need to define a username.";
      this.errName = "You need to add your full name.";
      this.errMail = "We need your e-mail address too.";
      this.errPass = "You need to add a password (can contain upper/lowercase characters and numbers).";
      this.errGender = "Choose an option from the given list.";

      this.onChange = this.onChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.getDataFromChild = this.getDataFromChild.bind(this);
      this.deleteErrMess = this.deleteErrMess.bind(this);
  }

  onClick(e) {
      console.log(e.target.id);
      console.log(this.state);

      if (this.state.user == '') {
        document.getElementById('usererr').style.visibility = 'visible';
        console.log("visible usererr");

      }
      if (this.state.fullname == '') {
        document.getElementById('fullnameerr').style.visibility = 'visible';
        console.log("visible nameerr");

      }
      if (this.state.email == '') {
        document.getElementById('emailerr').style.visibility = 'visible';
        console.log("visible mailerr");

      }
      if (this.state.gender == '') {
        document.getElementById('generr').style.visibility = 'visible';
        console.log("visible gendererr");

      }
      if (this.state.pass == '') {
        document.getElementById('passerr').style.visibility = 'visible';
        console.log("visible passerr");
      }
  }

  deleteErrMess(data) {
      console.log(data.target.id);
      console.log("hidden");
      document.getElementById(data.target.id + "err").style.visibility = 'hidden';
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
  }

  onChange(e) {
    console.log(e.target.id);

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
    if (e.target.id == 'gen') {
      console.log(e.target.id);
      this.setState({
        gender: e.target.value
      });
    }
  }

  render() {
    return (
      <div id="form">
      <br/>
      <label>Username: </label><br/>
      <input id="user" type="text" value={this.state.user} onChange={this.onChange} onClick={this.deleteErrMess}></input>
      <p id="usererr">{this.errUser}</p><br/><br/>

      <label>Full name: </label><br/>
      <input id="fullname" type="text" value={this.state.fullname} onChange={this.onChange} onClick={this.deleteErrMess}></input>
      <p id="fullnameerr">{this.errName}</p><br/><br/>

      <label>Email: </label><br/>
      <input id="email" type="email" value={this.state.email} onChange={this.onChange} onClick={this.deleteErrMess}></input>
      <p id="emailerr">{this.errMail}</p><br/><br/>

      <label>Gender: </label>
      <DropdownList id="gen" data="gender" onChange={this.getDataFromChild} onClick={this.deleteErrMess}/>
      <p id="generr">{this.errGender}</p><br/>

      <label>Password: </label><br/>
      <input id="pass" type="password" value={this.state.pass} onChange={this.onChange} onClick={this.deleteErrMess}></input>
      <p id="passerr">{this.errPass}</p><br/><br/>

      <button id="savebutton" text="Save" onClick={this.onClick}>Save</button>
      <div id="message">{this.state.user} {this.state.fullname} {this.state.email}</div><br/><br/>
      </div>
    )
  }
}

export default Form;
