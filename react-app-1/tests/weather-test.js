import expect from 'expect'
import WeatherStation from '../src/weatherstation';
// import PersonValidator from '../src/personvalidator';

describe("Weather station", function() {

  let ws = new WeatherStation('vkata', 'station#1', 45.124, 45.124);

  it("needs to have a creator (username) after initialization", function() {
    expect(ws.getCreator()).toBe('vkata');
  });

  it("needs to have a name after initialization", function() {
    expect(ws.getName()).toBe('station#1');
  });

  it("needs to have list of temperatures after initialization (in this case not an empty list)", function() {
    // console.log(ws.getTempList());
    expect(ws.getTempList()).toNotBe([]);
  });

  it("needs to have lat-coordinate after initialization", function() {
    expect(ws.getLat()).toBe(45.124);
  });

  it("needs to have a lng-coordinate after initialization", function() {
    expect(ws.getLng()).toBe(45.124);
  });
});
