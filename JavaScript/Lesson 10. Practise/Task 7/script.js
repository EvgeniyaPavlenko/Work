function isPangram(string){
  var alphabet = {
    a: 0, 
    e: 0, 
    i: 0, 
    o: 0, 
    u: 0, 
    y: 0, 
    b: 0, 
    c: 0, 
    d: 0, 
    f: 0, 
    g: 0, 
    h: 0, 
    j: 0, 
    k: 0, 
    l: 0, 
    m: 0, 
    n: 0, 
    p: 0, 
    q: 0, 
    r: 0, 
    s: 0, 
    t: 0, 
    v: 0, 
    w: 0, 
    x: 0, 
    z: 0
    }
  for(var i = 0; i < string.length; i++){
    alphabet[string[i].toLowerCase()] += 1
  }
  for(var key in alphabet){
    if(alphabet[key] == 0){
      return false
    }
  }
  return true
}


var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string) == true)
var string = "This is not a pangram."
console.log(isPangram(string) == false)