 // var bbt = require('beebotte');
 import Person from '../../person'

class UserRepository {

  constructor() {
    let p = new Person('vkata', 'Vizi Kata','asd','vk@gmail.com','female');
    this.list = [p];
      //  this.bclient = new bbt.Connector({apiKey: '1e60c10e31b1623ae845c9cae508bed0',
        //  secretKey: 'ac0a8cea8d9dc14480e9a20520496ec46e0028826aa188a9043033bfdc076338'});
  }

  save(user) {
    console.log(user.getUsername() + " " + user.getFullname() + " " + user.getEmail());
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

}

export default new UserRepository();
