import expect from 'expect'
import userRepository from '../src/core/repositories/userrepository'
import Person from '../src/person';


describe("User repository test", function() {

  let p1 = new Person('vkata', 'Vizi Kata','asd345asd','vk@gmail.com','female');
  let p2 = new Person('user', 'User Name','asd345asd','user@gmail.com','male');

  it("before adding a user length should be 0 - howMany", function() {
    expect(userRepository.howMany()).toBe(0);
  });

  it("after adding a user length should be 1 - howMany, save", function() {
    userRepository.save(p1);
    expect(userRepository.howMany()).toBe(1);
  });

  it("after adding a second user length should be 2 - howMany, save", function() {
    userRepository.save(p2);
    expect(userRepository.howMany()).toBe(2);
  });

  it("finding an existing user by name - findByName", function() {
    expect(userRepository.findByName('ser')).toNotBe([]);
  });

//   it("finding a user which does not exist by name - findByName", function() {
//     expect(userRepository.findByName('xyz')).toBeEmptyArray();
//   });
//
//   it("getting two elements of the list for the first page", function() {
//     let list = userRepository.listAllUsers();
// //    console.log(list);
//     expect(userRepository.getDataForPageNr(list, 1, 2).length).toBe(2);
//   });
//
//   it("getting one element of the list for the first page", function() {
//     list = userRepository.listAllUsers();
//     console.log(list);
//     expect(userRepository.getDataForPageNr(list, 1, 1).length).toBe(1);
//   });

});
