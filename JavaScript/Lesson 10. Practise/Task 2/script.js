function add() {
  //CODE
  var result = 0;
  
  for(var i = 0; i < arguments.length; i++){
    result += arguments[i] * (i+1);
  }
  return result;
}

console.log(add(100,200,300) == 1400);