function Unit(name, power){
  //public
  this.MAXHEALTH = 100;
  //private
  this._name = name;
  this._health = this.MAXHEALTH;
  this._level = 1;
  this._xp = 0;
  this._power = power;
}

//unit
function getName() {
  return this._name;
}

function getLevel() {
  return this._level;
}

function isAlive() {
  return this._health > 0;
}

function addHealth(a) {
  return this._health = this._health + a < this.MAXHEALTH ? this._health + a : this.MAXHEALTH;
}

function takeDamage(a) {
  _earnExperience.call(this, 500);
  this._health = this._health - a;
}

function _earnExperience(a) {
  this._xp += this._level > 1 ? (a - a * this._level * 0.1) : a;
  _levelUp.call(this);
}

function _levelUp() {
  this._level = (this._xp % 1000 === 0) ? this._level + 1 : this._level;
  console.log(this._level);
}

function action(units, shots){
  var stdPower = this._power * units * (shots ? shots : 1)
  var result = this._level > 1 ? (stdPower + stdPower * this._level * 0.01) : stdPower;
  _earnExperience.call(this, 250);
  return result; //healed / damaged
}

var Doctor = new Unit('Doctor', 10);
var Soldier = new Unit('Soldier', 15);
var Heavy = {name: 'Heavy', resistance: 0.2};
Heavy.__proto__ = Soldier;
