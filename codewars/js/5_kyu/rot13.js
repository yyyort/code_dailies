/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

CIPHERS FUNDAMENTALS
*/

function rot13(message){
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  let rot = ''

  for(let i = 0; i < message.length; i++){
    let isChar = alphabet.includes(message[i].toLowerCase());
    let index = alphabet.indexOf(message[i].toLowerCase())
    let isUpper = (message[i] == message[i].toUpperCase())
    
    if(isChar == false){
      rot += message[i]
      continue;
    }
    
    if(index + 13 > 25){
      let overflow = (index + 13) - 25
      
      if(isUpper){
        rot += alphabet[overflow - 1].toUpperCase()
      }else{
        rot += alphabet[overflow - 1]
      }
      
    }else{
      if(isUpper){
        rot += alphabet[index + 13].toUpperCase()
      }else{
       rot += alphabet[index + 13]
      }
      
    }
    
  }
  
  return rot
}
