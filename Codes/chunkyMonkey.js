function chunkArrayInGroups(arr, size) {
  // Break it up.
  var i,j=0;
  var len = arr.length;
  var arr1 = [];
  for(i=0; i<len; i+=size)
    {
      arr1.push( arr.slice(i, i+size));
      
    }
  return arr1;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

