/*12. Write a JavaScript program to extract the first half of a string of even length.*/

function check(string) {
  let x;
  if (string.length % 2 == 0) {
    x = (string.length / 2);
  } else {
    x = (string.length / 2) - 1;
  }
  const string2 = string.substring(0, x);
  console.log(string2)
}

check("YashTechnologies");