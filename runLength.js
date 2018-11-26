var a = "wwwggopp"

let obj = {}
let i = 0
var b = a.split('').map((el, idx, array) => {

    if (obj[el]) {
        if (array[idx-1] === el) {
            return obj[el] = i++
        }
    } else {
        i = 0
        return obj[el]= i
    } 
})
console.log(b)