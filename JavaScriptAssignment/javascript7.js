//7. Write a JavaScript program to count the number of vowels in a given string. 

function countVowels(str){
	const count = str.match(/[aeiou]/gi).length;
	
	return count;
}

const string = "Hello how are you";

const result = countVowels(string);
console.log("vowels count is : "+result);
