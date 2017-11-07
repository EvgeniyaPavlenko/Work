var obj = {
  person1Age: 20,
  person1Name: 'Ivanov',
  person2Age: 30,
  person2Name: 'Petrov',
  person3Age: 40,
  person3Name: 'Sidorov'
};

function extractNumber(obj){
	var numbers = [];
	for(key in obj){
		var value = obj[key]
		if(!isNaN(+value)){
			numbers.push(value);
		}
	}
	return numbers;
}

function extractStrings(obj){
	var strings = [];
	for(key in obj){
		var value = obj[key]
		if(isNaN(+value)){
			strings.push(value);
		}
	}
		return strings;
}

var ages = extractNumber(obj);
var names = extractStrings(obj);

console.log(ages);
console.log(names);

//var ages = [20,30,40];
//var names = ['Ivanov', 'Petrov', 'Sidorov'];