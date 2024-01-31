/*
 Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let i = 0
  let j = arr.length
  while(i < j){
    if(arr[i] ===0){
        let temp = arr.splice(i + 1, arr.length) // from 0 to i
        let temp2 = arr.splice(0, i ) //from i to n
        arr = temp2.concat(temp)
        arr.push(0)
        i = 0
        j--
    }
    i++
  }
  
  
  return arr
}
