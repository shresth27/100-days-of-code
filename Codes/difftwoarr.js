/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */


function diffArray(arr1, arr2) {
  
  // Same, same; but different.
  
  return arr1.filter(function(val) {
    return arr2.indexOf(val) === -1;
  })
  .concat( arr2.filter(function(val) {
    return arr1.indexOf(val) === -1
  }));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
