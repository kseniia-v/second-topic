//Object.defineProperty(obj,prop,descriptor)
var user = {
  firstName: "Вася",
  surname: "Петров",
  sayHi: function(){console.log('Hi');}
}

Object.defineProperty(user, "fullName", {
  //enumerable:true,
  get: function() {
    return this.firstName + ' ' + this.surname;
  },
  set: function(value) {
      var split = value.split(' ');
      this.firstName = split[0];
      this.surname = split[1];
    }
});

user.fullName = "Петя Иванов";

var admin = {job: 'fixer'};

admin.__proto__ = user

/*console.log(user);
console.log( user.firstName ); // Петя
console.log( user.surname ); // Иванов
console.log( user.fullName ); // setter/getter*/
console.log(Object.getOwnPropertyNames(user));
console.log(Object.keys(user));
console.log(user.hasOwnProperty('fullName'));
console.log(user.hasOwnProperty('sayHi'));
console.log(admin.hasOwnProperty('sayHi'));
console.log(admin);
console.log(admin.fullName);
console.log(admin.__proto__);
console.log(user.__proto__);

var obj = {
  test: 5
};
var descriptor = Object.getOwnPropertyDescriptor(obj, 'test');
console.log(descriptor);
