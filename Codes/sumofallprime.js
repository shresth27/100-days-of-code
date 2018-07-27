/*Intermediate Algorithm Scripting: Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.*/




function sumPrimes(limit) {
var i, sum = 0, flag = 0;
while(limit!=1)
{
  for(i=2; i<=(limit/2); i++)
  {
    if(limit%i == 0)
    {
      flag = 1;
      break;
    }
  }

  if(flag==0)
  {
    sum = sum + limit; 
  }

  flag = 0;
  limit--;
}
  console.log(sum);
  return sum;
}

sumPrimes(10);
