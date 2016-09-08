import WeatherStation from '../model/weatherstation'

class WSRepository {

 constructor() {
   this.list = [];
 }

 add(station) {
     this.list.push(station);
 }

 listAllStations() {
   return this.list;
 }

 deleteAllStations() {
   this.list = [];
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
