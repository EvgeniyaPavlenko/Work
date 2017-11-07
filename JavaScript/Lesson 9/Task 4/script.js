function f(x) {
  return Math.random() * x; 
}

function makeCaching(f){
	return function (x){
		return f(x);
	}
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)

b = f(2);
alert( a == b ); // false, другой аргумент => другое значение