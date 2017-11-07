function createSecretHolder(secret) {
  //create variable in a closure
  var mySecret = secret;
  //define object with methods which use variable from closure
  return {
    getSecret: function(){
      return mySecret;
    },
    setSecret: function(newSecret){
      mySecret = newSecret;
    }
  }
}

var obj = createSecretHolder(5);
console.log(obj.getSecret()); // returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // returns 2