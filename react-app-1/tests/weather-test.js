import expect from 'expect'
import WeatherStation from '../src/core/model/weatherstation';
// import PersonValidator from '../src/personvalidator';

describe("Weather station", function() {

  it("should have a creator (username) after initialization", function() {
    let ws = new WeatherStation('vkata', 'station#1', 45.124, 45.124);
    expect(ws.getCreator()).toBe('vkata');
  });

  it("should have a name after initialization", function() {
    let ws1 = new WeatherStation('vkata', 'station#1', 45.124, 45.124);
    expect(ws1.getName()).toBe('station#1');
  });

  it("should have list of temperatures after initialization", function() {
    let ws2 = new WeatherStation('vkata', 'station#1', 45.124, 45.124);
    expect(ws2.getTempList()).toNotBe([]);
  });

  it("should have list of humidities after initialization", function() {
    let ws5 = new WeatherStation('vkata', 'station#1', 45.124, 45.124);
    expect(ws5.getHumList()).toNotBe([]);
  });

  it("should have lat-coordinate after initialization", function() {
    let ws3 = new WeatherStation('vkata', 'station#1', 45.124, 45.124);
    expect(ws3.getLat()).toBe(45.124);
  });

  it("should have a lng-coordinate after initialization", function() {
    let ws4 = new WeatherStation('vkata', 'station#1', 45.124, 45.124);
    expect(ws4.getLng()).toBe(45.124);
  });

  it("the name of the station should be set", function() {
    let ws4 = new WeatherStation('vkata', 'station#1', 45.124, 45.124);
    ws4.setName("newName");
    expect(ws4.getName()).toBe("newName");
  });

  it("new temperature value should be added to the list", function() {
    let ws6 = new WeatherStation('vkata', 'station#1', 45.124, 45.124);

    let list_len1 = ws6.getTempList().length;
    ws6.addTemp(4);
    let list_len2 = ws6.getTempList().length;

    expect(list_len2 - list_len1).toBe(1);
  });

  it("new humidity value should be added to the list", function() {
    let ws7 = new WeatherStation('vkata', 'station#1', 45.124, 45.124);

    let list_len1 = ws7.getHumList().length;
    ws7.addHum(4);
    let list_len2 = ws7.getHumList().length;

    expect(list_len2 - list_len1).toBe(1);
  });

});
