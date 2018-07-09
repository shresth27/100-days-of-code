function largestOfFour(arr) {
  // You can do this!
  var i,j;
  var a, result = [];
  for(i in arr)
    {
      a = arr[i][0];
      for(j in arr)
        {
          if(arr[i][j]> a)
          
            {
              a = arr[i][j];
            }
          result[i] = a;
          
        }
    }
    
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

