/*
Intermediate Algorithm Scripting: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/


function sumAll(arr) {
  var first, second, sum = 0, i;
  if(arr[0] < arr[1])
  {
  first = arr[0];
  second = arr[1];
  }
  else 
  {
    first = arr[1];
    second = arr[0];

  }
  for(i= first; i<=second; i++)
  {
    sum = sum + i;
  }

  return sum;
}

sumAll([1, 4]);
