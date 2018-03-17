
function reverseString(str) {
  var str1 = str.split("");
  str = str1.reverse();
  str = str.join("");
  
  return str;
}

reverseString("hello");