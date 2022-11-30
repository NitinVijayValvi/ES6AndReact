/*5) Create an arrow function by which you will take input of string and you check given 
string is palindrome or not.
*/

function checkAlphanumeric(s) {
    return s.match(/^[A-Za-z0-9]+$/);
}
var ispalindrome = function (s) {
    var j = s.length - 1;
    for (var i = 0; i < j; i++, j--) {
        while (i < j && !checkAlphanumeric(s[i])) {
            i++;
        }
        while (i < j && !checkAlphanumeric(s[j])) {
            j--;
        }
        if (i < j && s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
    }
    return true;
};
if (ispalindrome("nitin") == true) {
    console.log("string is palindrome");
}
else {
    console.log("not palindrome");
}


