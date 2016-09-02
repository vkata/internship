class WeatherStation {

    constructor(user, name, lat, lng) {
        this.user = user;
        this.name = name;
        this.temp = [15,23,19,18,20,21,17,19,23,25];
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

    getTempList() {
      return this.temp;
    }

    getLat() {
      return this.lat;
    }

    getLng() {
      return this.lng;
    }
}

export default WeatherStation;
