function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  str = str.replace(/[\W_]/gi, '');
  str= str.split("");
  var str1 = str.reverse();
  str1 = str.join("");
  str = str.reverse();
  str = str.join("");
  
  if(str === str1)
  return true;
  else 
  return false;
}

