//variable declaration. checking login.
var login = prompt("Введите логин");

//if login - "admin". password verification
if(login == "admin"){
	var password = prompt("Введите пароль");
	if (password =="passw0rd"){
		alert("Welcome home!")
	}else if (password == null){
		alert("canceled");
	}else{
		alert("Wrong password");
	}
}
//if login != "admin". prohibit the entry
else{
	alert("Access denied");
}
