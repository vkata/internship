 import Person from '../../person'

class UserRepository {

  constructor() {
    this.list = [];
  }

  save(user) {
    this.list.push(user);
  }

  login(username, password) {
    if (username == "" || password == "")
      return false;

    if (username == "admin" && password == "admin") {
        console.log("admin");
        return true;
    }

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
        this.list[i].setFullname(newName);
        this.list[i].setEmail(newMail);
        this.list[i].setPassword(newPassword);
        this.list[i].setGender(newGender);
        return true;
      }
    }
    return false;
  }
}

export default new UserRepository();
