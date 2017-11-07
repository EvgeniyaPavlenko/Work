// Before
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(image){
	for (key in image){
		if (!isNaN(image[key])){   //check if key value is a number
			image[key] *= 2;       //if value is a number, multiply it
		}
	}
}

multiplyNumeric(image); 
console.log(image);               //display object with new values