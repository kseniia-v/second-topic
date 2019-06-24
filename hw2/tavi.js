function CoffeeMachine(power) {
  this.waterAmount = 0;
  console.log( 'Создана кофеварка мощностью: ' + power + ' ватт' );
}

// создать кофеварку
var coffeeMachine = new CoffeeMachine(100);
console.log(coffeeMachine.waterAmount);
// залить воды
coffeeMachine.waterAmount = 200;
console.log(coffeeMachine.waterAmount);
