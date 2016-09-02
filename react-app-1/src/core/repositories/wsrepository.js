// var bbt = require('beebotte');
import WeatherStation from '../../weatherstation'

class WSRepository {

 constructor() {
   let station = new WeatherStation('vkata', 'station#1', 14.234, 34.21341);
   let station2 = new WeatherStation('vkata', 'station#2', 45.234, -3.21341);
   this.list = [station, station2];
     //  this.bclient = new bbt.Connector({apiKey: '1e60c10e31b1623ae845c9cae508bed0',
       //  secretKey: 'ac0a8cea8d9dc14480e9a20520496ec46e0028826aa188a9043033bfdc076338'});
 }

 add(station) {
     this.list.push(station);
     console.log(station.getName() + " station is added to the list");

   // this.bclient.write(
   //   {channel: 'users', resource: 'username', data: username},
   //   function(err, res) {
   //     if (err) console.log(err);
   //   });
 }

 listAllStations() {
   return this.list;
 }

 getStationByName(name) {
   for (let i = 0; i<this.list.length; i++) {
     if (this.list[i].getName() == name) {
       console.log("getting by name: " +this.list[i].getName());
       return this.list[i];
     }
   }
 }
}

export default new WSRepository();
