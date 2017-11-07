function someFunction() {
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

//apply function given as first argument with arguments given as second argument
function spread(func, args) {
  return func.apply(this, args);
}

console.log(spread(someFunction, [1, true, "Foo", "bar"] ));
