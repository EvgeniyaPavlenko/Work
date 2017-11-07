function Calculator() {
  
//substitute operator in the object and find a method to this operator
  var methods = {
    "-": function(a, b) {
      return a - b;
    },
    "+": function(a, b) {
      return a + b;
    }
  };

//split expression into format of two argments and operator
//check that the first and last elements are numbers

  this.calculate = function(str) {

    var split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return methods[op](+a, +b);
  }

  this.addMethod = function(name, func) {
    methods[name] = func;
  };
}

//add new methods to Calculator. store new calculation method using related operator
var powerCalc = new Calculator;

powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
alert( result ); 