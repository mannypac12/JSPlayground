let expense = {
    type: "lol", 
    amount: 10000
}

// const { type } = expense
// const { amount } = expense

// console.log(type)
// console.log(amount)

const { type, amount } = expense

var saveFiled = {
    extension: 'jpg', 
    name: 'repost', 
    size: 14040
};

function fileSummary({ name, extension, size }, { color }) {
    return `${ color } The file ${ name }.${ extension } is of size ${size}`
} 

// console.log(fileSummary(saveFiled, { color:'red' }))

// Destructuring Array

// const companies = [ 'Google', 'Facebook', 'Uber' ]
// const [ name, ...rest ] = companies
// const { length } = companies

// console.log(length)
// console.log(...rest)

// const companies = [
//     { name: 'Google', location: 'Mountine View' },
//     { name: 'Facebook', location: 'Menlo Park' },
//     { name: 'Uber', location: 'San Francisco' },
// ]

// const [ { location } ] = companies;

const Google = {
    locations: [ 'Mountain View', 'New York', 'London' ]
}

const { locations: [ locations ]} = Google;
console.log(locations)

function signup(username, password) {
    // Create new user
} 

const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
  ];

const test = classes.map(el => {
    let [ subject, time, teacher ] = [ el ]
    return {
        subject, time, teacher
    } 
})
console.log(test)

