function swap(str){
  var str = str.split("");
  var newarr = [];

  for(var i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase()){
      newarr.push(str[i].toUpperCase());
    }else{
      newarr.push(str[i].toLowerCase());
    }
  }
  return newarr.join("");
}


console.log(swap('HelloWorld') === 'hELLOwORLD');
console.log(swap('CodeWars') === 'cODEwARS');