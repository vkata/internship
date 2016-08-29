class Person {
  
    constructor(username, fullname, password, email, gender) {
        this.username = username;
        this.fullname = fullname;
        this.password = password;
        this.email = email;
        this.gender = gender;
    }

    getUsername() {
      return this.username;
    }

    setUsername(newUser) {
      this.username = newUser;
    }

    getFullname() {
      return this.fullname;
    }

    setFullname(newName) {
      this.fullname = newName;
    }

    getPassword() {
      return this.password;
    }

    setPassword(pass) {
      this.password = pass;
    }

    getEmail() {
      return this.email;
    }

    setEmail(email) {
      this.email = email;
    }

    getGender() {
      return this.gender;
    }

    setGender(gen) {
      this.gender = gen;
    }
}

export default Person;
