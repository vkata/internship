import React from 'react';
import Button from './button'
import DropdownList from './dropdownlist'
import RadioGroup from './radiogroup'

class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state= {
        user: '',
        fullname: '',
        email: '',
        pass: '',
        gender: '',
        errUser: ' ',
        errName: ' ',
        errMail: ' ',
        errPass: ' ',
        errGender: ' '
      }

      this.onChange = this.onChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.getDataFromChild = this.getDataFromChild.bind(this);
      this.deleteErrors = this.deleteErrors.bind(this);
  }

  onClick() {
      console.log(this.state);
      if (this.state.user == '') {
        this.setState({
          errUser: "You need a username."
        })
      }
      if (this.state.fullname == '') {
        this.setState({
          errName: "You must write a name."
        })
      }
      if (this.state.email == '') {
        this.setState({
          errMail: "You must write your email address."
        })
      }
      if (this.state.pass == '') {
        this.setState({
          errPass: "You need a password."
        })
      }
      if (this.state.gender == '') {
        this.setState({
          errGender: "You need to choose an option."
        })
      }
      if (this.state.user != "" && this.state.fullname != ""
            && this.state.email != "" && this.state.pass != ""
              && this.state.gender != "") {
                this.deleteErrors();
                this.setState({
                  err: "Ok. All fields are filled."
                });
              }
  }

  deleteErrors() {
    this.setState({
      errUser: " "
    });
    this.setState({
      errName: " "
    });
    this.setState({
      errMail: " "
    });
    this.setState({
      errPass: " "
    });
    this.setState({
      errGender: " "
    });
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
    this.deleteErrors();

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
    if (e.target.id == 'gender') {
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
        <input id="user" type="text" value={this.state.user} onChange={this.onChange}></input><p id="info">{this.state.errUser}</p><br/><br/>
        <label>Full name: </label><br/>
        <input id="fullname" type="text" value={this.state.fullname} onChange={this.onChange}></input><p id="info">{this.state.errName}</p><br/><br/>
        <label>Email: </label><br/>
        <input id="email" type="email" value={this.state.email} onChange={this.onChange}></input><p id="info">{this.state.errMail}</p><br/><br/>
        <label>Gender: </label><DropdownList id="gender" data="gender" handle={this.getDataFromChild}/><p id="info">{this.state.errGender}</p><br/>
        <label>Choose an option: </label><br/>
        <RadioGroup/>
        <label>Password: </label><br/>
        <input id="pass" type="password" value={this.state.pass} onChange={this.onChange}></input><p id="info">{this.state.errPass}</p><br/><br/>
        <Button id="small" text="Save" onClick={this.onClick}/>
        <div id="message">{this.state.user} {this.state.fullname} {this.state.email}</div><br/><br/>
      </div>
    )
  }
}

export default Form;
