function duplicates(arr) {
var result = [];

  nextInput:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i]; // для каждого элемента
      for (var j = 0; j < result.length; j++) {
        if (result[j] == str) continue nextInput;
      }
      result.push(str);
    }

  return result;
}


console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']));
console.log(duplicates([0, 1, 2, 3, 4, 5]));