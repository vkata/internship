class WeatherStation {

    constructor(user, name) {
        this.user = user;
        this.name = name;
        this.temp = [];
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
}

export default WeatherStation;
