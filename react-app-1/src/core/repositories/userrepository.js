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
    console.log(username + " is trying to log in with password: " + password);
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
}

export default new UserRepository();
