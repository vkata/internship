class PersonValidator {

    /**
     * a username should contain upper- and lowercase letters and numbers only
     */
    checkUsername(userName) {
      if (/^[a-zA-Z0-9]+$/g.test(userName)) {
        return 'success';
      }
      else return 'error';
    }

    /**
     * fullname = first name + last name, each starting with an uppercase char,
     * contains only letters and is separated by a space
     */
   checkFullname(fullName) {
     if (/^[A-Z]{1}[a-z]+ [A-Z][a-z]+$/g.test(fullName)) {
       return 'success';
     }
     else return 'error';
   }

   /**
    * validation for an email address
    */
   checkEmail(email) {
     if (/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-z]+$/g.test(email)) {
       return 'success';
     }
     else return 'error';
   }

   /**
    * passwords should be at least 7 chars long, and contain only letters and numbers
    */
   checkPassword(pass) {
       if (/^[a-zA-Z0-9]{7}[a-zA-Z0-9]*$/g.test(pass) ) {
         return 'success';
       }
       else {
         return 'error';
       }
   }

   /**
    * the gender value can be: female, male or not specified
    */
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

   /**
    * this function uses all of the above functions and returns true if
    * each one returns 'success', otherwise returns false 
    */
   validate(user, fullname, password, email, gender) {
     if (this.checkUsername(user)=='success' && this.checkFullname(fullname)=='success'
      && this.checkEmail(email)=='success' && this.checkPassword(password)=='success'
        && this.checkGender(gender)=='success') {
          return true;
        }
     else return false;
   }
}

export default new PersonValidator();
