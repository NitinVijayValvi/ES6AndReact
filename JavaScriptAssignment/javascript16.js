/*16. Write a JavaScript program to find the number which appears most in a given array of 
integers.
*/

function arry(arr){
	const counter = [],
	res = 0;
	
	var i = 0;
	for(i ;i < 10 ; i++){
		counter.push(0);
		
	}
	for(i,i<arr.length;;i++){
		counter[arr[i] -1]++;
		if(counter[arr[i] - 1]> counter[res])
		{
			res = arr[i] -1;
		}
	}
	return res + 1;
}
console.log(arry([3,4,5,6,6,11,5,11,1]));