//import Person from './person';

class PersonValidator {

    checkUsername(userName) {
      if (/^[a-zA-Z0-9]+$/g.test(userName)) {
        return 'success';
      }
      else return 'error';
    }

   checkFullname(fullName) {
     if (/^[A-Z]{1}[a-z]+ [A-Z][a-z]+$/g.test(fullName)) {
       return 'success';
     }
     else return 'error';
   }

   checkEmail(email) {
     if (/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-z]+$/g.test(email)) {
       return 'success';
     }
     else return 'error';
   }

   checkPassword(pass) {
       if (/^[a-zA-Z0-9]{7}[a-zA-Z0-9]*$/g.test(pass) ) {
         return 'success';
       }
       else {
         return 'error';
       }
   }

   checkGender(gen) {
     if (/^female$/g.test(gen)) {
       return 'success';
     } else if (/^male$/g.test(gen)) {
       return 'success';
     } else if (/^not specified$/g.test(gen)) {
       return 'success';
     }
     else return 'error';
   }

   validate(user, fullname, password, email, gender) {
     if (this.checkUsername(user) && this.checkFullname(fullname)
      && this.checkEmail(email) && this.checkPassword(password)
        && this.checkGender(gender)) {
          return true;
        }
     else return false;
   }
}

export default new PersonValidator();
