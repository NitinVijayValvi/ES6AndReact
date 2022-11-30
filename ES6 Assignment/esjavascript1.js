/* 1) Create an arrow function which will take multiple inputs and you have to print he
minimum number from it. */
var temp;
var min = function (x, y, z) {
    {
        if (x < y) {
            if (x < z) {
                temp = x;
            }
            else {
                temp = z;
            }
        }
        else {
            if (y < z) {
                temp = y;
            }
            else {
                temp = z;
            }
        }
        return temp;
    }
};
console.log(min(20, 30, 40));
