function descendingOrder(n){
  return +n.toString().split("").reverse().join("");
}

console.log(descendingOrder(123456789) == 987654321);