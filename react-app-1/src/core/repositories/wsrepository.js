import WeatherStation from '../model/weatherstation'

class WSRepository {

 constructor() {
   this.list = [];
 }

/**
 * pushing a new station to the list
 */
 add(station) {
     this.list.push(station);
 }

/**
 * returning the list of the stations
 */
 listAllStations() {
   return this.list;
 }

/**
 * the list of the stations is set to an empty list
 *  -> deleting
 */
 deleteAllStations() {
   this.list = [];
 }

/**
 * getting a part of the original list -> it's length is elemNr,
 * the first element will be the element with index (pageNr-1) * elemNr
 * from the original list
 *
 * this function is used for pagination
 */
 getDataForPageNr(pageNr, elemNr, currentList) {

   let listToReturn = [];
   let i = (pageNr-1) * elemNr;
   while (i < pageNr * elemNr && i < currentList.length) {
     listToReturn.push(currentList[i]);
     i++;
   }
   return listToReturn;
 }

/**
 * filling the list with 100 stations with random coordinates
 */
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

/**
 * getting the station from the list with the given name
 */
 getStationByName(name) {
   for (let i = 0; i<this.list.length; i++) {
     if (this.list[i].getName() == name) {
       return this.list[i];
     }
   }
 }
/**
 * finding weather stations with names containing chars as a substring
 * returns a list of stations
 */
 findByName(chars) {
   let res = [];
   for (let i = 0; i<this.list.length; i++) {
     if (this.list[i].getName().indexOf(chars) > -1) {
       res.push(this.list[i]);
     }
   }
   return res;
 }


/**
 * returns the rength of the list
 */
 howMany() {
   return this.list.length;
 }
}

export default new WSRepository();
