function User(fullName) {
  this.fullName = fullName;

  Object.defineProperties(this, {

//define getter and setter for the first name and last name

    firstName: {

      get: function() {
        return this.fullName.split(' ')[0];
      },

      set: function(newFirstName) {
        this.fullName = newFirstName + ' ' + this.lastName;
      }

    },

    lastName: {

      get: function() {
        return this.fullName.split(' ')[1];
      },

      set: function(newLastName) {
        this.fullName = this.firstName + ' ' + newLastName;
      }

    }

  });
}

var vasya = new User("Александр Пушкин");

// чтение firstName/lastName
console.log( vasya.firstName ); // Александр
console.log( vasya.lastName ); // Пушкин

// запись в lastName
vasya.lastName = 'Толстой';

console.log( vasya.fullName ); // Александр Толстой