/*7) Create a class of student (rollno, name, totalmarks, classname). Now you have sort the 
student data on the basis of result using arrow function.*/


var Student =(function () {
    function Student(rollno, name, totalmarks, classname) {
        this.rollno = rollno;
        this.name = name;
        this.totalmarks = totalmarks;
        this.classname = classname;
    }
    return Student;
}());
var sortStudMarks = function (allStud) {
    for (var i = 0; i < allStud.length; i++) {
        for (var j = i + 1; j < allStud.length; j++) {
            if (allStud[i].totalmarks > allStud[j].totalmarks) {
                var temp = allStud[i];
                allStud[i] = allStud[j];
                allStud[j] = temp;
            }
        }
    }
    for (var i = 0; i < allStud.length; i++) {
        console.log("student " + i + " : ");
        console.log("Student roll number : " + allStud[i].rollno);
        console.log("Student Name : " + allStud[i].name);
        console.log("Student Marks : " + allStud[i].totalmarks);
        console.log("Student classname : " + allStud[i].classname);
        console.log("\n");
    }
};
var stud1 = new Student(101, 'mayur', 86, 'btech');
var stud2 = new Student(102, 'suraj', 69, 'btech');
var stud3 = new Student(103, 'sumit', 56, 'btech');
var stud4 = new Student(104, 'nitin', 90, 'btech');
var stud5 = new Student(105, 'kumar', 96, 'btech');
var studArr;


studArr = [stud1, stud2, stud3, stud4, stud5];
console.log('sorted data with marks ')
sortStudMarks(studArr);