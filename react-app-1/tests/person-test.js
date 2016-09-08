import expect from 'expect'
import Person from '../src/core/model/person';
import PersonValidator from '../src/core/model/personvalidator';

describe("Person", function() {

  it("should have a username after initialization", function() {
    let p = new Person('vkata', 'Vizi Kata','asd','vk@gmail.com','female');
    expect(p.getUsername()).toBe('vkata');
  });

  it("should have a full name after initialization", function() {
    let p1 = new Person('vkata', 'Vizi Kata','asd','vk@gmail.com','female');
    expect(p1.getFullname()).toBe('Vizi Kata');
  });

  it("should have a password after initialization", function() {
    let p2 = new Person('vkata', 'Vizi Kata','asd','vk@gmail.com','female');
    expect(p2.getPassword()).toBe('asd');
  });

  it("should have an email after initialization", function() {
    let p3 = new Person('vkata', 'Vizi Kata','asd','vk@gmail.com','female');
    expect(p3.getEmail()).toBe('vk@gmail.com');
  });

  it("should have a gender after initialization", function() {
    let p4 = new Person('vkata', 'Vizi Kata','asd','vk@gmail.com','female');
    expect(p4.getGender()).toBe('female');
  });

  it("username of the person should be set", function() {
    let p5 = new Person('vkata', 'Vizi Kata','asd','vk@gmail.com','female');
    p5.setUsername('new_vkata');
    expect(p5.getUsername()).toBe('new_vkata');
  });
});
