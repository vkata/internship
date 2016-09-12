 import Person from '../model/person'

class UserRepository {

  constructor() {
    this.list = [];
  }

/**
 * adding a new user to the repository (list)
 */
  save(user) {
    this.list.push(user);
  }

/**
 * checking if the username and password parameters are belonging to a registered user or not,
 * returns true if yes and false otherwise
 * firstly we check whether the parameters are empty -> return false if they are
 * the username=admin and password=admin are belonging to the admin user
 *
 */
  login(username, password) {
    if (username == "" || password == "")
      return false;

    if (username == "admin" && password == "admin") {
        return true;
    }

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].getUsername() == username && this.list[i].getPassword() == password) {
        return true;
      }
    }

    return false;
  }

/**
 * returning a list with all of the users
 */
  listAllUsers() {
    return this.list;
  }

/**
 * list of users is set to an empty list -> delete
 */
  deleteAllUsers() {
    this.list = [];
  }

/**
 * function needed for pagination
 * returns a part of the original list
 * first element is the element with index ((pageNr-1) * elemNr),
 * the length of the list is elemNr
 */
  getDataForPageNr(pageNr, elemNr) {
    let listToReturn = [];
    let i = (pageNr-1) * elemNr;
    while (i < pageNr * elemNr && i < this.list.length) {
      listToReturn.push(this.list[i]);
      i++
    }
    return listToReturn;
  }

/**
 * filling the list of users with 100 elements
 */
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

/**
 * returns the length of the list
 */
  howMany() {
    return this.list.length;
  }

/**
 * finding users whose full name contains chars
 * returns a list of users
 */
  findByName(chars) {
    let res = [];
    for (let i = 0; i<this.list.length; i++) {
      if (this.list[i].fullname.indexOf(chars) > -1) {
        res.push(this.list[i]);
      }
    }
    return res;
  }

/**
 * updating the data belonging to a user with username=user
 * username won't be updated
 */
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
