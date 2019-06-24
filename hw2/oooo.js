

var Unit = {
  _maxHealth: 100,

  name: 'Unit',
  health: 2,
  level: 1,
  xp: 0,

  getName: function() {
  return this.name;
  },
  getLevel: function() {
    return this.level;
  },
  isAlive: function() {
    return this.health > 0;
  },
  addHealth: function(a) {
    return this.health = this.health + a < _maxHealth ? this.health + a : _maxHealth;
  },
  takeDamage: function(a) {

  },
  earnExperience: function(a) {

  },
  levelUp() {
    this.level = (this.xp % 1000 === 0) ? this.level + 1 : this.level;
    console.log(this.level);
  }
}


console.log(Unit.isAlive())
