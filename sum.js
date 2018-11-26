const memo = (fn) => {

    const cache = {}
    
    return function(...args) {
        if (cache[args]) {
            return cache[args]
        }
        const result = fn(...args)
        cache[args] = result
        console.log(cache)
        return result
    } 
    
}

const cumSum = (n) => {
    if (n <= 1) {
        return 1
    }
    return n + cumSum(n-1)
}

const mCumSum = memo(cumSum)

console.log(mCumSum(10))

console.log(cumSum(5))