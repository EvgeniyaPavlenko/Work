var make_lazy = function (fn) {
//get arguments for future function from special object "arguments"
  var args = Array.prototype.slice.call(arguments, 1);
  return function(){
//call delayed function with arguments
    return fn.apply(this, args)
  }
};

function add (a, b) {
  return a + b;
}
var lazy_value = make_lazy(add, 2, 3);
console.log(lazy_value()) // 5