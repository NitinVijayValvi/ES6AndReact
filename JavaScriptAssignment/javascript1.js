//1. Write a JavaScript program to reverse a given string. 

function reverse(str)
{
  if(!str || str.length< 2 || typeof str!== 'string'){
    return 'not valid'
  }
  
  const revArray = [];
  const length = str.length -1
  
  let i = length;
  for(i;i>=0;i--){
    revArray.push(str[i]);
  }
  
  return revArray.join('');
  
}

console.log("reverse string is : "+reverse("nitinvalvi"))