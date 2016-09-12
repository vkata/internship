class CoordValidator {

  /**
   * coordinates should contain a - sign optionally, after that at least one number,
   * an obligatory . and at least one number again
   *
   * if it is correct the function returns 'success' and 'error' otherwise
   */
    checkCoord(coord) {
      if (/^-*[0-9]+\.[0-9]+$/g.test(coord)) {
        return 'success';
      }
      else return 'error';
    }
}

export default new CoordValidator();
