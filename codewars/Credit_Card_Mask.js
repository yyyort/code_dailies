/* 

Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. However
since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

 */


/* 
    "4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
*/

// return masked string
function maskify(cc) {
    let stringMask = ""
    
    //putting # char to mask upto the last 4th index of the string 
    if(cc.length > 4){
      for(i = 0; i <= cc.length - 5; i++){
      stringMask += "#"
      }
    }
     
    //slicing the last 4th char in string and concatenating it with mask
    let stringRem = cc.slice(cc.length - 4, cc.length)
    let string = stringMask + stringRem
    
    if (cc.length <= 3){
      string = cc
    }
    
    return string
  }