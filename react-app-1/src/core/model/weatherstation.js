class WeatherStation {

    constructor(user, name, lat, lng) {
        this.user = user;
        this.name = name;
        this.temp = [15, 23, 19, 18, 20, 21, 17, 19, 23, 25];
        this.humidity = [34, 43, 39, 35, 38, 40, 41, 42, 38, 35];
        this.lat = lat;
        this.lng = lng;
    }

    getName() {
      return this.name;
    }

    setName(name) {
      this.name = name;
    }

    getCreator() {
      return this.user;
    }

    addTemp(t) {
      this.temp.push(t);
    }

    addHum(h) {
      this.humidity.push(h);
    }

    getTempList() {
      return this.temp;
    }

    getHumList() {
      return this.humidity;
    }

    getLat() {
      return this.lat;
    }

    getLng() {
      return this.lng;
    }
}

export default WeatherStation;
