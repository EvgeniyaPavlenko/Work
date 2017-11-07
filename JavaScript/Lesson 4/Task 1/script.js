
function fib(n) {
  var num;
//recursive calls itself to the time when "n" became >=2
  if (n >= 2) {
    num = fib(n - 1) + fib(n - 2);
  } 

  //if number = 2 or 1 return "1" because first two numbers in fibonacci are - 1;
  else {
    num = n;
  }

  return num;
}

alert(fib(prompt("Введите желаемое число")));