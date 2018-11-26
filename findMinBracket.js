var userInput = "-30-10+560+20-40+40";

var findMinByBracket  = function(str) {
  
  // str[0] === - then initial Value goes to -
  // str[0] === + 
  let stArr = str.split('-')

  if (stArr[0] !== '') {
  } else {
    stArr.shift()
    stArr[0] = `-${stArr[0]}`
  }
  return stArr.map(el => {
    console.log(el)  
    return eval(el)}).reduce((acc,cur) => acc - cur)

}

console.log(findMinByBracket(userInput))

console.log("30-10+560+20-40+40".split('-'))
