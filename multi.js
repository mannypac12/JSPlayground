// MultiplicativePersistence

var ans = 39

function multi(num) {
    return num.toString().split('').reduce((acc,cur) => acc * cur)
} 

while (ans > 10) {
   var ans = multi(ans) 
}

console.log(ans)

