let a = [1,1,2,1]

const test = (el) => el === 1

let b = a.reduce((acc, cur) => {
    return test(cur) === acc ? true:false
}, true)
// with reduce, 
console.log(b)