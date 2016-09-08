import expect from 'expect'
import userRepository from '../src/core/repositories/userrepository'
import Person from '../src/core/model/person';


describe("User repository", function() {

  it("length should be 0 after initialization", function() {
    expect(userRepository.howMany()).toBe(0);
  });

  it("length should be 2 after adding two new users", function() {
    userRepository.deleteAllUsers();

    let p1 = new Person('vkata', 'Vizi Kata','asd345asd','vk@gmail.com','female');
    let p2 = new Person('user', 'User Name','asd345asd','user@gmail.com','male');

    userRepository.save(p1);
    userRepository.save(p2);
    expect(userRepository.howMany()).toBe(2);
  });

  it("length should be 0 after deleting all of the elements of the list", function() {
    userRepository.deleteAllUsers();
    expect(userRepository.howMany()).toBe(0);
  });

  it("length should be 100 after populating list", function() {
    userRepository.deleteAllUsers();
    userRepository.populate();
    expect(userRepository.howMany()).toBe(100);
  });

  it("should return a list when calling listAllUsers()", function() {
    userRepository.deleteAllUsers();
    let p3 = new Person('vkata_kata', 'Viziii Kata','asssd345asd','vkatt@gmail.com','female');
    let p4 = new Person('user_new', 'User Nameee','asd345asd','username@gmail.com','male');

    userRepository.save(p3);
    userRepository.save(p4);

    let list = userRepository.listAllUsers();
    expect(list.length).toBe(2);
  });

  it("should return a list when we are filtering by username", function() {
    userRepository.deleteAllUsers();
    let p5 = new Person('vkata_kata', 'Viziii Kata','asssd345asd','vkatt@gmail.com','female');
    let p6 = new Person('user_new', 'User Nameee','asd345asd','username@gmail.com','male');

    userRepository.save(p5);
    userRepository.save(p6);

    let list = userRepository.findByName('ser');
    expect(list.length).toBe(1);
  });

  it("should return empty list if there are no matches after filtering", function() {
    userRepository.deleteAllUsers();
    let p5 = new Person('vkata_kata', 'Viziii Kata','asssd345asd','vkatt@gmail.com','female');
    let p6 = new Person('user_new', 'User Nameee','asd345asd','username@gmail.com','male');

    userRepository.save(p5);
    userRepository.save(p6);

    let list = userRepository.findByName('username');
    expect(list.length).toBe(0);
  });

  it("should return a list with length of 2 after getting elements for the first page (page = 2 elements)", function() {
    userRepository.deleteAllUsers();

    let p5 = new Person('vkata_kata', 'Viziii Kata','asssd345asd','vkatt@gmail.com','female');
    let p6 = new Person('user_new', 'User Nameee','asd345asd','username@gmail.com','male');

    userRepository.save(p5);
    userRepository.save(p6);

    expect(userRepository.getDataForPageNr(1, 2).length).toBe(2);
  });

  it("should be able to log in with admin", function() {
    expect(userRepository.login("admin", "admin")).toBe(true);
  });

  it("should NOT be able to log in without username or password", function() {
    expect(userRepository.login("", "")).toBe(false);
  });

  it("should be able to log in with a registered user", function() {
    userRepository.deleteAllUsers();
    let p7 = new Person('user', 'User Name','password','user@name.com','female');

    userRepository.save(p7);
    expect(userRepository.login('user', 'password')).toBe(true);
  });

  it("should NOT be able to log in with a user which is not registered", function() {
    userRepository.deleteAllUsers();

    expect(userRepository.login('user', 'password')).toBe(false);
  });

  it("the user should be updated", function() {
    userRepository.deleteAllUsers();
    let p8 = new Person('user', 'User Name','password','user@name.com','female');
    userRepository.save(p8);

    expect(userRepository.updateUser('user', 'Updated Name', 'updated@mail.com', 'updatedPassword', 'male')).toBe(true);
  });

  it("update should not be successful if username does not exist in the repository", function() {
    userRepository.deleteAllUsers();

    expect(userRepository.updateUser('user', 'Updated Name', 'updated@mail.com', 'updatedPassword', 'male')).toBe(false);
  });

});
