import expect from 'expect'
import Person from '../src/person';
import personValidator from '../src/personvalidator';

describe("Personvalidator", function() {
//  let pers = new Person('vkata', 'Vizi Kata','asd','vk@gmail.com','female');
//  personValidator(pers);

  it("validator does exist", function() {
    expect(personValidator).toNotBe(undefined);
  });

  it("functionality of the validator - valid user", function() {
    expect(personValidator.validate('vkata', 'Vizi Kata','asdefgasd','vk@gmail.com','female')).toBe(true);
  });

  it("checking username containing special chars", function() {
    expect(personValidator.checkUsername('vkat@#a')).toBe('error');
  });

  it("checking name starting with lowercase chars", function() {
    expect(personValidator.checkFullname('vizi kata')).toBe('error');
  });

  it("checking a correct full name ", function() {
    expect(personValidator.checkFullname('Vizi Kata')).toBe('success');
  });

  it("checking an incorrect email ", function() {
    expect(personValidator.checkFullname('katavizi.gmail')).toBe('error');
  });

  it("checking a correct email ", function() {
    expect(personValidator.checkFullname('katavizi@gmail.com')).toBe('error');
  });

  it("checking a too short password", function() {
    expect(personValidator.checkPassword('23as')).toBe('error');
  });

  it("checking a correct password", function() {
    expect(personValidator.checkPassword('23asd45asd')).toBe('success');
  });

  it("functionality of the validator - user should be invalid", function() {
    expect(personValidator.validate('vkata$', 'vk', 'asd', 'vk@gmail', 'fe')).toNotBe(true);
  });
});
