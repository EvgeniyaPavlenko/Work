function sum() {
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() {
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

//apply function given as first argument with rest arguments sliced by borrowed function
function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
  }

console.log( applyAll(sum, 1, 2, 3) ); // 6
console.log( applyAll(mul, 2, 3, 4) ); // 24