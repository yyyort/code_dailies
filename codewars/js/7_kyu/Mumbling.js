/*
 This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	// your code
  //loop on string, take index base on index is how many times to repeat the char
  let str = ''
  
  for(let i = 0; i < s.length; i++){
    let str1 = ''
    for(let j = 0; j <= i; j++){
      //console.log(j)
      if(j === 0){
        let upp = s[i].toUpperCase()
        str1 += upp
      }else{
        let low = s[i].toLowerCase()
        str1 += low
      }
      
    }
    str += `${str1}`
    if(i < s.length - 1){
      str += '-'
    }
  }

  return str
}
