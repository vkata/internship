import React from 'react'

class Session {
  constructor() {
    this.currentuser = "";
  }

  isLoggedIn() {
      if (this.currentuser != "")
        return true
      else return false;
  }

  setCurrentUser(usr) {
    this.currentuser = usr;
  }

  getCurrentUser() {
    return this.currentuser;
  }
}

export default new Session();
