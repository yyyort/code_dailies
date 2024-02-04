/*
Definition (Primorial Of a Number)
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

Task
Given a number N , calculate its primorial.!alt!alt
Notes
Only positive numbers will be passed (N > 0) .
Input >> Output Examples:
1- numPrimorial (3) ==> return (30)
Explanation:
Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .
*/

int numPrimorial(int n) {
  // your code here
  var primorial = 1;
  for(int i = 2, j = 0; j < n; i++){
    if(isPrime(i) == true){
      primorial *= i;
      j++;
    }
  }
  return primorial;
}
       
bool isPrime(n){
  if(n == 2){
    return true;
  }
  for(int i = 2; i * i<= n; i++){
    if(n % i == 0){
      return false;
    }
  }
  return true;
}
