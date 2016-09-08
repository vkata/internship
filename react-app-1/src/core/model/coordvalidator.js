class CoordValidator {

    checkCoord(coord) {
      if (/^-*[0-9]+\.[0-9]+$/g.test(coord)) {
        return 'success';
      }
      else return 'error';
    }
}

export default new CoordValidator();
