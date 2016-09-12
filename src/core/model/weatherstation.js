class WeatherStation {

    constructor(user, name, lat, lng) {
        this.user = user;
        this.name = name;
        this.temp = [15, 23, 19, 18, 20, 21, 17, 19, 23, 25, 25, 26, 27, 30, 31, 29, 27, 28, 26, 27, 29, 25, 24, 26, 23, 22, 19, 21, 18, 17, 17];
        this.humidity = [34, 43, 39, 35, 38, 40, 41, 42, 38, 35, 40, 45, 50, 52, 60, 58, 56, 63, 56, 54, 49, 52, 43, 46, 48, 42, 50, 52, 53, 49];
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
