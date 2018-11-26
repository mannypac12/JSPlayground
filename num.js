let str = "1o53 LhKlYemepr1pZgvKG u YWrzT TdU0eMCzheu 6z Sf vT408yTVpeK03aOiQ9aHyqCzvJFhle"

function filt(el, index, array) {

    return el
}


let d = str
        .split('')
        .filter(el => el.charCodeAt() >= 48 && el.charCodeAt() <= 57)
        .map(el => parseInt(el))
        // .reduce((acc, cur) => acc + cur)

let num = str
            .toLowerCase()
            .split('')
            .filter(el => el.charCodeAt() >= 97 && el.charCodeAt() <= 122)
            // .length

console.log(d)


let numArr = []
let charArr = []

str
    .split('')
    .forEach(function(el) {
        if (!isNaN(el)) {}
    })
