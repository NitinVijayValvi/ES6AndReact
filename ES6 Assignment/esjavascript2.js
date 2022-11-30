/*2) Create an arrow function by which will take multiple strings and you have print each 
string along with length of each string.*/
var names = ['Nitin', 'Kumar', 'Mayur','Rushikesh','Dnyaneshwar'];
var printStrLength = function (names) {
    for (var i = 0; i < names.length; i++) {
        console.log("String is " + names[i] + " and its length is : " + names[i].length);
    }
};
printStrLength(names);

