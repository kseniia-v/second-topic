const _maxHealth = 100;

function Unit (name){
  this.name = name;
  this.health = _maxHealth;
  this.level = 1;
  this.xp = 0;
}
//unit
function getName() {
  return this.name;
}
function getLevel() {
  return this.level;
}
function isAlive() {
  return this.health > 0;
}
function addHealth(a) {
  return this.health = this.health + a < _maxHealth ? this.health + a : _maxHealth;
}
function takeDamage(a) {
  earnExperience.call(this,500);
  this.health = this.health - a;
  if(!isAlive){die.call(this);};
  //console.log(this);
}
function earnExperience(a) {
  this.xp += this.level > 1 ? (a - a / this.level * 0.1) : a;
  levelUp.call(this);
}

function levelUp() {
  this.level = (this.xp % 1000 === 0) ? this.level + 1 : this.level;
  console.log(this.level);
}

//doctor || soldier
function action(units,shots){
  var stdPower = this.power * units * (shots ? shots : 1)
  var result = this.level > 1 ? (stdPower + stdPower * this.level * 0.1) : stdPower;
  earnExperience.call(this,250);
  return result; //healed / damaged
}

function die(){ return {};}

var doctor = new Unit('Doctor');
var soldier = new Unit('Soldier');

doctor.power = 10;
soldier.power = 15;

var heavy = {};
heavy.__proto__ = soldier;
heavy.name = 'Heavy';
heavy.resistance = 0.2;

takeDamage.call(doctor,200);
console.log(doctor);
