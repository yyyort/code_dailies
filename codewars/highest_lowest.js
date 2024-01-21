function highAndLow(numbers){
  // ...
  //todo seperate the string by space
  //loop to find the smallest and highest
  //concat the highest and smallest
  
  let num = numbers.split(" ");
  
  //loop
  let smallest;
  let highest;
  for(let i = 0; i < num.length; i++){
    if(i == 0){
      smallest = Number(num[i])
      highest = Number(num[i])
    }
    if(Number(num[i]) <= smallest){
      smallest = num[i]
    }
    if(Number(num[i]) >= highest){
      highest = num[i]
    }
  }
  
  return `${highest} ${smallest}`
}
