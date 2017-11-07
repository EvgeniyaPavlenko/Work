//variable declaration. number from user. Must be more then 100
var number;

//check the number. If it less or equal to 100, ask user to try again
do{
	number = prompt("Введите любое число больше 100", 101);
} while(number <= 100 && number != null);

