/*
function boo(func, context) {
  return function() {
    console.log(arguments); // {'0':2} ; empty if nthng in aa();
    console.log(context); // { name: 'mimi' }
    return func.apply(context, arguments);
  };
}
var o = {name: 'mimi'};
var f = function mimi(a) {
  console.log(this.name); // mimi
  console.log(a+a); //4
}
//1.
var ff = f.bind(o);
ff(); //mimi
//2.
var aa = boo(f, o);
aa(2); //mimi

//--------------------------
var timers = {};
function timingDecorator(f, timer) {
  return function() {
    var start = 1;

    var result = f.apply(this, arguments);

    console.log(this);
    console.log(arguments);

    if (!timers[timer]) timers[timer] = 0;
    timers[timer] += 2 - start;

    return result;
  }
}

var fibonacci = function f(n) {
  return (n > 2) ? f(n - 1) + f(n - 2) : 1;
}
fibonacci = timingDecorator(fibonacci, "fibo");
fibonacci(10);//1мс
console.log( timers.fibo + 'мс' );
fibonacci(30); //2мс
console.log( timers.fibo + 'мс' );
console.log( timers);//{ fibo: 2 }
*/
function decorator(func){
  return function(){
    return 'calculated sum: ' + func.apply(this, arguments) + '.';
  }
}

function sum(a,b){
  return a+b;
}

var d = decorator(sum,[1,2]);
console.log(sum(1,2));
console.log(d(1,2));
