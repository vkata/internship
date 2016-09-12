import React from 'react'

class Session {
  constructor() {
    this.currentuser = "";
  }

  setCurrentUser(usr) {
    this.currentuser = usr;
  }

  getCurrentUser() {
    return this.currentuser;
  }
}

export default new Session();
