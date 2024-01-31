/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 
*/

var countBits = function(n) {
  // Program Me
  //get the number needed to raise to get n
  const numBits = Math.ceil(Math.log2(n))
  let bits = 2 ** numBits
  let cnt = 0
  
  //divide until we get the the total bits
  while(n >= 0){
    if(n <= 0){
      break
    }
    
    if(bits <= n){
      cnt++
      n -= bits
    }
    bits /= 2
  }

  return cnt
};
