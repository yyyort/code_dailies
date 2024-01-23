/*
 Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
  */

function longest(s1, s2) {
  // your code
  let myString = ''
  for(let i = 0; i<s1.length; i++){
    if(myString.includes(s1[i]) == false){
      myString+=s1[i]
    }
  }
  for(let i = 0; i<s2.length; i++){
    if(myString.includes(s2[i]) == false){
      myString+=s2[i]
    }
  }
  
  myString = myString.split('').sort().join('');
  
  return myString
}
