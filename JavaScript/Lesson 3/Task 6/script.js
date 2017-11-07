function pow(x,n){
//assign the value "1" to variable "result"
	var result = 1;
//run the loop, which repeat multiplication x on n times
	for(i = 0; i < n; i++){
		result*=x;
	}
//return the multiplication result
	return (result);
}

//assigns the value of the function parameters - get by user. And display the result
alert(pow(+prompt("Введите число", ""), +prompt("ведите степень возведения", "")));