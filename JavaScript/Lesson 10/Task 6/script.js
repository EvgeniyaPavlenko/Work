function whatType(n){
	return typeof n;
}

console.log(whatType(1)); //number
console.log(whatType("1")); //string
console.log(whatType(true)); //boolean
console.log(whatType(function(){})); //function
console.log(whatType(undefined)); //undefined
console.log(whatType([])); //object