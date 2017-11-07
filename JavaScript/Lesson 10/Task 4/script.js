var str = "the quick brown fox";
var toCamelCase = function(str){

    newstr = str.split(" ");
    // before loop there is - ["the", "quick", "brown", "fox"]

    //  cycle for all values newstr
    for(var i = 0; i < newstr.length; i++){
        // store the value of the index in variable
        var word = newstr[i];
        // declare variable where store first letter "word" in upper case and section from word - start from first symbol
        var newWord = word[0].toUpperCase() + word.slice(1);
        // return new word to our array by index newstr[i]
        newstr[i] = newWord;   
    }

    //combine indexes to the string

    return newstr.join(" ");
}

console.log(toCamelCase(str));