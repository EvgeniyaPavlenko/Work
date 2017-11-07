function getThreePoints(string, maxLength){
//condition - number of symbols must be less then 20.
	if (string.length > maxLength){
//in case, when length is more - cut the text to 17 symbols+3 points. Totally get - 20 symbols.
		 return string.slice(0, maxLength - 3) + '...';
	}else{
		return (string);
	}
}

//display the comment
console.log(getThreePoints(prompt("Введите ваш комментарий"), 20));
