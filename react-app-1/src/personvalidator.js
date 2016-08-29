//import Person from './person';

class PersonValidator {

    constructor(pers) {
      this.pers = pers;
    }

    checkUsername() {
      if (/^[a-zA-Z0-9]+$/g.test(this.pers.getUsername())) {
        return true;
      }
      else return false;
    }

   checkFullame() {
     if (/^[A-Z]{1}[a-z]+ [A-Z][a-z]+$/g.test(this.pers.getFullname())) {
       return true;
     }
     else return false;
   }

   checkEmail() {
     if (/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-z]+$/g.test(this.pers.getEmail())) {
       return true;
     }
     else return false;
   }

   checkPassword() {
     if (/^[a-zA-Z0-9]+$/g.test(this.pers.getPassword())) {
       return true;
     }
     else return false;
   }

   checkGender() {
     if (/^female$/g.test(this.pers.getGender())) {
       return true;
     } else if (/^male$/g.test(this.pers.getGender())) {
       return true;
     } else if (/^not specified$/g.test(this.pers.getGender())) {
       return true;
     }
     else return false;
   }

   validate() {
     if (this.checkUsername() && this.checkFullame()
      && this.checkEmail() && this.checkPassword()
        && this.checkGender()) {
          return true;
        }
     else return false;
   }
}

export default PersonValidator;
