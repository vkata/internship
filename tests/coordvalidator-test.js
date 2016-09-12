import expect from 'expect'
import coordValidator from '../src/core/model/coordvalidator';

describe("CoordValidator", function() {

  it("should return success if coordinate is valid", function() {
    expect(coordValidator.checkCoord(1.23232)).toBe('success');
  });

  it("should return error if coordinate is valid", function() {
    expect(coordValidator.checkCoord('23..232')).toBe('error');
  });
});
