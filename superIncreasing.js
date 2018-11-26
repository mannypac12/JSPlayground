let test = [1,3,5,13,54]

// default true
// if the next number

// Loop forEach
// true
// 

let lt = []

test.reduce((acc,cur) => {
    lt.push(acc)
    return acc+cur})

let ans = lt.every((el, index, array) => {
    console.log(el)
    el > array[index-1]})
console.log(ans)