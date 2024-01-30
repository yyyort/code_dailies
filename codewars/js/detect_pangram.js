/*
 A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

function isPangram(string){
  //input if new letter in list push letter,
  //if list is less than 26(a-z) return false
  
  let list = []
  for(let i = 0; i < string.length; i++){
    if(list.includes(string[i]) == false){
      console.log('test')
      if(typeof(string[i]) == 'string' && !(string[i] == ' ') ){
        list.push(string[i]);
      }
    }
  }
  
  if(list.length >= 26){
    return true
  }else{
    return false
  }
}
