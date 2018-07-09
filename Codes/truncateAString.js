
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var len = str.length;
  var as ="...";
  if(num<len)
  {if(num<=3)
    {
      str = str.slice(0, num);
      str = str.concat(as);
      
    }
  else
    {
      str = str.slice(0,num-3);
      str = str.concat(as);
      
    }
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

