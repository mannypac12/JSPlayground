const memo = (fn) => {

    const cache = {}; 

    return function(...args) {
        if (cache[args]) {
            return cache[args]
        } 

        const result = fn(...args)
        return result
    }

    // const cache = {};

    // return function(...args) {
    //     if (cache[args]) {
    //         return cache[args]
    //     } 
    //     const result = fn.apply(this, args)
    //     cache[args] = result
    //     return result
    // }
}

const slowFact = (n) => {
    if (n <= 1) {
        return 1
    } else {
        return n * slowFact(n-1)
    }
}

const fact = memo(slowFact)

for (el of [1,2,3,4,5,6,7,8,9,10]) {
    console.log(fact(el))
}

