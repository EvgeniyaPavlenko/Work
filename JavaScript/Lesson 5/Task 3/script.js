var calc = [];    //declare array
var sum = 0;      

var numberFromUser = 1;

//get numbers from user until them not equal to false, "" or NaN
while (numberFromUser){
	numberFromUser = +prompt("Введите число", ""); 
	calc.push(numberFromUser);  //push numbers from User to array
}


//iterate throught the save numbers and sum them
for(var i = 0; i < calc.length; i++){ 
	sum += calc[i];
}

//display the sum value
console.log(sum);