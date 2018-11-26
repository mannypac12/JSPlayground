const maxSort=(a,b) => {
    return parseInt(b) - parseInt(a)
}

const minSort=(a,b) => {
    return parseInt(a) - parseInt(b)
}

const thrtyDiv = (div) => {
    return Math.floor(parseInt(div) / 30)
}

// Devide and Conquer
const sameArray = (arrOne, arrTwo) => {

    let oneObj = {}
    let twoObj = {}
    
    arrOne.forEach(el => {
        if (oneObj[el]) {
            oneObj[el]++
        } else {
            oneObj[el] = 1
        }
    })
    
    arrTwo.forEach(el => {
        if (twoObj[el]) {
            twoObj[el]++
        } else {
            twoObj[el] = 1
        }
    })
    
    return Object.keys(oneObj).reduce((acc, cur) => {
        return acc && oneObj[cur] === twoObj[cur] ? true:false
    }, true)
}

const numGen = (str) => {

    let arr = str.split('').sort(maxSort)

    let min = thrtyDiv(parseInt(arr.sort(minSort).slice().join('')))
    let max = thrtyDiv(parseInt(arr.sort(maxSort).slice().join('')))
    let lower = min + Math.floor((max-min)/2)
    let init = false
    let comp = ''
    let ans = []
    console.log(max)
    
    while (lower <= max || init) {
        lower++
        comp = (lower * 30).toString().split('')
        init = sameArray(comp,arr)

        if (init === true) {
            ans.push(comp)
        }
    }

    if (ans.length > 0) {
        return parseInt(ans[ans.length-1].join(''))
    } else {
        while (min < lower || init) {
            comp = (min * 30).toString().split('')
            init = sameArray(comp,arr)
            min++
            if (init) {
                ans.push(comp)
            }
        }
        return ans.length > 0 ? parseInt(ans[ans.length-1].join('')):-1
    }    
}

// findMaxOnMultiplesOfThirty

console.log(numGen('5940'))