//variable declaration
var name = prompt("are you manager or admin?");
var text;

//name check
(name == "admin") ? text = "Hi":
	(name == "manager") ? text = "Hello" :
		(name == "") ? text = "No login" : text = "";
   
//result initialization
alert(text);


