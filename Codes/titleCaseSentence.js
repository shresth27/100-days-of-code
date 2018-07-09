function titleCase(str) {
  str = str.toLowerCase().split(" ");
  var str1 = str.map( function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  
  str1 = str1.join(" ");
  
  return str1;
}

titleCase("I'm a little tea pot");
