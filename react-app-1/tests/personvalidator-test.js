import expect from 'expect'
import Person from '../src/core/model/person';
import personValidator from '../src/core/model/personvalidator';

describe("Personvalidator", function() {
//  let pers = new Person('vkata', 'Vizi Kata','asd','vk@gmail.com','female');
//  personValidator(pers);

  it("should not be undefined after initialization", function() {
    expect(personValidator).toNotBe(undefined);
  });

  it("should return true if we try to validate a valid user", function() {
    expect(personValidator.validate('vkata', 'Vizi Kata','asdefgasd','vk@gmail.com','female')).toBe(true);
  });

  it("should return error if the username contains special characters", function() {
    expect(personValidator.checkUsername('vkat@#a')).toBe('error');
  });

  it("should return error if full name starts with lowercase characters", function() {
    expect(personValidator.checkFullname('vizi kata')).toBe('error');
  });

  it("should return success if full name is valid", function() {
    expect(personValidator.checkFullname('Vizi Kata')).toBe('success');
  });

  it("should return error if email is invalid", function() {
    expect(personValidator.checkEmail('katavizi.gmail')).toBe('error');
  });

  it("should return success if email is valid", function() {
    expect(personValidator.checkEmail('katavizi@gmail.com')).toBe('success');
  });

  it("should return error if password is too short", function() {
    expect(personValidator.checkPassword('23as')).toBe('error');
  });

  it("should return success if password is valid", function() {
    expect(personValidator.checkPassword('23asd45asd')).toBe('success');
  });

  it("should return success if gender is \"female\"", function() {
    expect(personValidator.checkGender('female')).toBe('success');
  });

  it("should return success if gender is \"male\"", function() {
    expect(personValidator.checkGender('male')).toBe('success');
  });

  it("should return success if gender is \"not specified\"", function() {
    expect(personValidator.checkGender('not specified')).toBe('success');
  });

  it("should return success if gender is invalid", function() {
    expect(personValidator.checkGender('anything')).toBe('error');
  });

  it("validator should not return true if any of the data is invalid", function() {
    expect(personValidator.validate('vkata$', 'vk', 'asd', 'vk@gmail', 'fe')).toNotBe(true);
  });
});
