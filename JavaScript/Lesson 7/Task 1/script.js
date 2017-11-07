function createFunctions(n) {
  var callbacks = [];
//for each function in array create local scope using inner function
  for (var i = 0; i < n; i++) {
    callbacks[i]=function(j) {
      return function(){ 
      	return j };
    }(i);
  }
   return callbacks;
}

var callbacks = createFunctions(5); // create an array, containing 5 functions

console.log(callbacks[0]()); // must return 0
console.log(callbacks[3]()); // must return 3