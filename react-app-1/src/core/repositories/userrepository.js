// var bbt = require('beebotte');
 import Person from '../../person'

class UserRepository {

  constructor() {
    this.list = [];
      //  this.bclient = new bbt.Connector({apiKey: '1e60c10e31b1623ae845c9cae508bed0',
        //  secretKey: 'ac0a8cea8d9dc14480e9a20520496ec46e0028826aa188a9043033bfdc076338'});
  }

  save(user) {
    this.list.push(user);
    // this.bclient.write(
    //   {channel: 'users', resource: 'username', data: username},
    //   function(err, res) {
    //     if (err) console.log(err);
    //   });
  }

  login(username, password) {
    if (username == "" || password == "")
      return false;
    console.log(username + " is trying to log in with password: " + password);
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].getUsername() == username && this.list[i].getPassword() == password) {
        console.log(this.list[i]);
        return true;
      }
    }
    return false;
  }

  listAllUsers() {
    return this.list;
  }

  getDataForPageNr(pageNr, elemNr) {
    let listToReturn = [];
    for (let i = (pageNr-1) * elemNr; i < pageNr * elemNr; i++) {
      listToReturn.push(this.list[i]);
    }
    return listToReturn;
  }

  populate() {
    for (let i = 0; i<100; i++) {
      let user = "user" + i;
      let name = "User" + i + " Name" + 2*i;
      let password = "password";
      let email = "user" + i + "@mail.com";
      let gender = "male";
      let p = new Person(user, name, password, email, gender);
      this.list.push(p);
    }
  }

  howMany() {
    return this.list.length;
  }

  findByName(chars) {
    let res = [];
    for (let i = 0; i<this.list.length; i++) {
      if (this.list[i].fullname.indexOf(chars) > -1) {
        res.push(this.list[i]);
      }
    }
    return res;
  }

  updateUser(user, newName, newMail, newPassword, newGender) {
    let i = 0;
    for (let i = 0; i<this.list.length; i++) {
      if (this.list[i].getUsername() == user) {
        console.log("before update: " + this.list[i]);
        this.list[i].setFullname(newName);
        this.list[i].setEmail(newMail);
        this.list[i].setPassword(newPassword);
        this.list[i].setGender(newGender);
        console.log("after update: " + this.list[i]);
        return true;
      }
    }
    return false;
  }
}

export default new UserRepository();
