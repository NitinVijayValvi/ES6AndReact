/* 9. Write a JavaScript program to divide two positive numbers and return a string with properly 
formatted commas.*/



a = 80;
b = 6;

var div = Math.round(a/b).toString(),
resultarr= div.split("");

if(div >= 1000){
	
	for(var i = div.length - 3; i> 0 ;i = -3){
		
		resultarr.splice(i,0,",");
	}
	resultarr;
}
console.log("output: "+resultarr)

