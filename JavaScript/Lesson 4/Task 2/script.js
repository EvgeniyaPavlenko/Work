
function checkSpam(string){
//outputs a string in lowercase, because our method case sensitive
	var lowerString = string.toLowerCase();

//check that the result of "indexOf" is not equal to "-1". 
	if (lowerString.indexOf("spam") != -1 || lowerString.indexOf("sex") != -1){
		return true;
	}else{
		return false;
	}

}

//display the result
console.log(checkSpam("get new Sex videos"));
console.log(checkSpam("[SPAM] How to earn fast money?"));
console.log(checkSpam("New PSD template"));