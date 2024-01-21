/* 
You live in the city of Cartesia where all roads are laid out in a perfect grid.
 You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
 The city provides its citizens with a Walk Generating App on their phones
  -- everytime you press the button it sends you an array of one-letter strings representing directions
   to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction)
    and you know it takes you one minute to traverse one city block, so create a function 
    that will return true if the walk the app gives you will take you exactly ten minutes
     (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array containing 
    a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
    It will never give you an empty array (that's not a walk, that's standing still!).


*/



function isValidWalk(walk) {
  //insert brilliant code here
  
  //rules arr should have atleast 10 char
  if (walk.length < 10 || walk.length > 10){
    return false
  }
  
  let n = 0
  let s = 0
  let w = 0
  let e = 0
  
  //computing how many for each coord
  for (i = 0; i <= walk.length -1; i++){
    console.log(walk[i])
    switch(walk[i]){
        case "n":
        n += 1
        break;
        case "s":
        s += 1
        break;
        case "e":
        e += 1
        break;
        case "w":
        w += 1
        break;
    }
  }
  
  let x = n - s
  let y = e - w
  
  console.log(`n ${n}, s ${s}, e ${e}, w ${w}, arr ${walk}`)
  console.log(`x ${x}, y ${y}`)
  
  //this basically means all coords cancels and which means we are in starting point
  if (x == 0 && y == 0){
    return true
  }else {
    return false
  }
  
}
