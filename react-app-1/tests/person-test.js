import expect from 'expect'
import Person from '../src/person';
import PersonValidator from '../src/personvalidator';

describe("Person", function() {

  let p = new Person('vkata', 'Vizi Kata','asd','vk@gmail.com','female');

  it("needs to have a username after initialization", function() {
    expect(p.getUsername()).toBe('vkata');
  });

  it("needs to have a full name after initialization", function() {
    expect(p.getFullname()).toBe('Vizi Kata');
  });

  it("needs to have a password after initialization", function() {
    expect(p.getPassword()).toBe('asd');
  });

  it("needs to have an email after initialization", function() {
    expect(p.getEmail()).toBe('vk@gmail.com');
  });

  it("needs to have a gender after initialization", function() {
    expect(p.getGender()).toBe('female');
  });
});
