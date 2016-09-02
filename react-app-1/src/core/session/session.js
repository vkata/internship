class Session {
  constructor(usr) {
    this.currentuser = "";
  }

  setCurrentUser(usr) {
    this.currentuser = usr;
  }

  getCurrentUser() {
    return this.currentuser;
  }
}

export default Session;
