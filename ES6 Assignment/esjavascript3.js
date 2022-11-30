/* 3) Create an arrow function by which you have to find out average of given N numbers.*/


var sum = 0;
var average = 0;
var start = 0;
var n = 0;
var averagearrow = function (start, n) {
    for (start = start; start <= n; start++) {
        sum = sum + start;
        average = sum / n;
    }
};
averagearrow(1, 20);
console.log("average is: " + average);