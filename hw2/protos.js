//1. ------ object constructor ------
function Person(){
  this.name = arguments[0];
  this.age = arguments[1];
}
var user = new Person('User', 26);
console.log(user);
//console.log(Person.prototype);
//console.log(Person.constructor);
console.log( Object.getOwnPropertyNames(Person.prototype) ); // constructor
console.log( Person.prototype.hasOwnProperty('constructor') ); // constructor
console.log( Person.prototype.constructor); // true

// 2. ------ {}.__proto__ ------
var user = {
  name: 'alla',
  age: 20
}
var admin = {job: 'fixer'};
admin.__proto__ = user
/*
console.log(Object.getOwnPropertyNames(user));
console.log(Object.keys(user));
console.log(user.hasOwnProperty('name'));
console.log(admin.hasOwnProperty('name'));
console.log(admin);
console.log(admin.name);
console.log(admin.__proto__);
console.log(user.__proto__);
*/
// 3. ------ var obj = Object.create(proto, descriptor) ------
var a = Object.create(Object)
console.log(a.toString); // toString
var a = Object.create(null) // no __proto__
console.log(a.toString); //undefined
console.log(Object.getPrototypeOf(admin));
// 4. ------ f.prototype ------



var animal = {
  eats: true
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

// в rabbit можно найти оба свойства
console.log(rabbit ); // true
console.log( rabbit.eats ); // true
