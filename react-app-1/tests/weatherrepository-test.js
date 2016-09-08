import expect from 'expect'
import wsRepository from '../src/core/repositories/wsrepository'
import WeatherStation from '../src/core/model/weatherstation';

describe("Weather station repository", function() {

  beforeEach(function() {
    wsRepository.deleteAllStations();
  });

  it("length should be 0 after initializatioh", function() {
    expect(wsRepository.howMany()).toBe(0);
  });

  it("length should be 100 after populating list", function() {
    wsRepository.populate();
    expect(wsRepository.howMany()).toBe(100);
  });

  it("length should be 0 after deleting all of the elements of the list", function() {
    expect(wsRepository.howMany()).toBe(0);
  });

  it("length should be 2 after adding 2 stations", function() {
    let ws1 = new WeatherStation('vkata', 'station#1', 45.124, 45.124);
    let ws2 = new WeatherStation('user', 'station#2', 34.124, 61.124);

    wsRepository.add(ws1);
    wsRepository.add(ws2);

    expect(wsRepository.howMany()).toBe(2);
  });

  it("should return a list when calling listAllStations()", function() {
    let ws1 = new WeatherStation('vkata', 'station#1', 45.124, 45.124);
    let ws2 = new WeatherStation('user', 'station#2', 34.124, 61.124);

    wsRepository.add(ws1);
    wsRepository.add(ws2);

    let list = wsRepository.listAllStations();

    expect(list.length).toBe(2);
  });

  it("should return a station object if we are getting a station by name", function() {
    let ws3 = new WeatherStation('newuser', 'station#3', 34.124, 12.124);
    wsRepository.add(ws3);

    //getting a station object as a result
    let sttn = wsRepository.getStationByName('station#3');
    //checking if we got the correct object by testing the name of the creator
    expect(sttn.getCreator()).toBe('newuser');
  });

  it("should return a list with length of 2 after getting elements for the first page (page = 2 elements)", function() {
    let ws4 = new WeatherStation('vkata', 'station#4', 48.194, 25.124);
    let ws5 = new WeatherStation('user_user', 'station#5', 37.124, 68.138);

    wsRepository.add(ws4);
    wsRepository.add(ws5);

    expect(wsRepository.getDataForPageNr(1, 2).length).toBe(2);
  });

});
