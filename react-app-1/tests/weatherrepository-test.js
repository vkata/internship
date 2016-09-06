import expect from 'expect'
import wsRepository from '../src/core/repositories/wsrepository'
import WeatherStation from '../src/weatherstation';


describe("Weather station repository test", function() {

  let ws1 = new WeatherStation('vkata', 'station#1', 45.124, 45.124);
  let ws2 = new WeatherStation('user', 'station#2', 34.124, 61.124);

  it("before adding a weather station length should be 0 - howMany", function() {
    expect(wsRepository.howMany()).toBe(0);
  });

  it("after adding a weather station length should be 1 - howMany, add", function() {
    wsRepository.add(ws1);
    expect(wsRepository.howMany()).toBe(1);
  });

  it("after adding a second weather station length should be 2 - howMany, add", function() {
    wsRepository.add(ws2);
    expect(wsRepository.howMany()).toBe(2);
  });

  it("finding an existing weather station by name '#1' - getStationByName", function() {
    expect(wsRepository.getStationByName('#1')).toNotBe([]);
  });

  it("finding an existing weather station by name 'stat' - getStationByName", function() {
    expect(wsRepository.getStationByName('stat')).toNotBe([]);
  });

  it("getting two elements of the list for the first page", function() {
    expect(wsRepository.getDataForPageNr(1, 2).length).toBe(2);
  });

  it("getting one element of the list for the first page", function() {
    expect(wsRepository.getDataForPageNr(1, 1).length).toBe(1);
  });

});
