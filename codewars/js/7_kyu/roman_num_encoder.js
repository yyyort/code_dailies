/*
 Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

 * */

function solution(number){
  // convert the number to a roman numeral
  let string = ''
  if(number == 1){
    return 'I'
  }
  
  while(number > 0){
    if((number - 1000) >= 0){
      number -= 1000
      string += 'M'
    }else if((number - 900) >= 0){
      number -= 900
      string += 'CM'
    }else if((number - 500) >= 0){
      number -= 500
      string += 'D'
      //continue
    }else if((number - 400) >= 0){
      number -= 400
      string += 'CD'
    }else if((number - 100) >= 0){
      number -= 100
      string += 'C'
    }else if((number - 90) >= 0){
      number -= 90
      string += 'XC'
    }else if((number - 50) >= 0){
      number -= 50
      string += 'L'
    }else if((number - 40) >= 0){
      number -= 40
      string += 'XL'
    }else if((number - 10) >= 0){
      number -= 10
      string += 'X'
    }else if((number - 9) >= 0){
      number -= 9
      string += 'IX'
    }else if((number - 5) >= 0){
      number -= 5
      string += 'V'
    }else if((number - 4) >= 0){
      number -= 4
      string += 'IV'
    }else if((number - 1) >= 0){
      number -= 1
      string += 'I'
    }
  }
  
  return string
}
