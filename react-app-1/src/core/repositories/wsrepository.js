// var bbt = require('beebotte');
import WeatherStation from '../../weatherstation'

class WSRepository {

 constructor() {
   this.list = [];
     //  this.bclient = new bbt.Connector({apiKey: '1e60c10e31b1623ae845c9cae508bed0',
       //  secretKey: 'ac0a8cea8d9dc14480e9a20520496ec46e0028826aa188a9043033bfdc076338'});
 }

 add(station) {
     this.list.push(station);
    //  console.log(station.getName() + " station is added to the list");

   // this.bclient.write(
   //   {channel: 'users', resource: 'username', data: username},
   //   function(err, res) {
   //     if (err) console.log(err);
   //   });
 }

 listAllStations() {
   return this.list;
 }

 getDataForPageNr(pageNr, elemNr) {
   let listToReturn = [];
   let i = (pageNr-1) * elemNr;
   while (i < pageNr * elemNr && i < this.list.length) {
    //  console.log(i);
     listToReturn.push(this.list[i]);
     i++;
   }
   return listToReturn;
 }

 populate() {
   for (let i = 0; i<100; i++) {
     let user = "user" + i;
     let name = "station#" + i;
     let lat = Math.floor((Math.random() * 85) + 1);
      lat *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
     let lng = Math.floor((Math.random() * 180) + 1);
      lng *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
     let ws = new WeatherStation(user, name, lat, lng);
     this.list.push(ws);
   }
 }

 getStationByName(name) {
   for (let i = 0; i<this.list.length; i++) {
     if (this.list[i].getName() == name) {
       return this.list[i];
     }
   }
 }

 howMany() {
   return this.list.length;
 }
}

export default new WSRepository();
