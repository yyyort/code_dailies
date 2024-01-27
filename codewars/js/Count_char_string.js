/*
 The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/


function count(string) {
  // TODO
  let dict = {}
  //return empty if string is empty
  if(string === ''){
    return {}
  }else{
    //loop thru string
    for(let i = 0; i < string.length; i++){
      //if new key = 1
      if(dict[`${string[i]}`]){
        dict[`${string[i]}`] += 1
      }else{      //if exist add 1
        dict[`${string[i]}`] = 1
      }
      
    }
  }
  
  return dict;
}
