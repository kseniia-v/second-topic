/*
function showFullName() {
  alert( this.firstName + " " + this.lastName );
}
var user = {
  firstName: "Василий",
  lastName: "Петров"
};
showFullName.call(user)
*/
//-------------

var user = {name: 1 ? 'Sam':'5'}
var admin = {name: 'Admin'}
function sayName(){console.log(this.name);}
user.f=sayName;
//admin.f=sayName;
user.f();
//admin.f();
//console.log(user);
//sayName.call(admin)
//console.log(admin);
//---------------
// bind:

var a = sayName.bind(admin);
a();
var u = sayName.bind(user);
u();
