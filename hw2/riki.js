var user = {name: 1 ? 'Sam':'5'}
var admin = {name: 'Admin'}
function sayName(){console.log(this.name);}
user.f=sayName;
admin.f=sayName;
user.f();
admin.f();
//==============================
function Animal(name) {
  this.name = name;
  this.canWalk = true;
}
var animal = new Animal("ёжик");
console.log(animal);
//==============================
function BigAnimal() {
  this.name = "Мышь";
  return  {name:10};  // <-- возвратим объект
}
console.log( new BigAnimal().name );
//==============================
function User(name) {
  this.name = name;
  this.sayHi = function() {
    console.log( "Моё имя: " + this.name );
  };
}
var ivan = new User("Иван");
ivan.sayHi();
//==============================
var cat = {}
Object.defineProperty(cat, 'name', {value:'Busja'});
console.log(cat.name); // Busja
console.log(cat); // {} - unless enumerable is set

Object.defineProperty(cat, 'name', {
  value:'Busja', // when no used set/get
  writable: true, // when no used set/get, modifiable
  configurable: true, //delete / change with definePropperty
  enumerable: true  // for..in / Object.keys()
});

var user = {
  name: "Вася",
  toString: function() { return this.name; }
};
Object.defineProperty(user, "toString", {enumerable: false});
for(var key in user) console.log(key);
console.log(user.toString());
