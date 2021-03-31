// What is a boolean?
// They are either true / false
/*
x = 5 <--- Never do this
var x = 5 <--- Don't do this either
let x = 5 <---When you might change the value
const x = 5 <--- When you want the value to stay the same
*/
// Creating a new variable (2 steps)
// Declaration
let y
//Initialization / variable assignment
y = 5

// How can we make booleans?
let x = Boolean(5) // Function that turns something to a bool
x = Boolean (0) // reassignment
console.log(x)

let z = false
z = true
console.log(typeof z)

let result = 5 > 4
console.log(result)
/*
== checks for equality
>= greater than or equal to
> greater than
<= less than or equal to
< less than

&& returns true if both (a && b) are true
|| returns true if either (a || b) are true
*/
let flippedBool = !true // ! is called bang and flips the boolean used
console.log(flippedBool)
console.log(!true || false)

// Truthy // Falsey
// Truthy 'test', [1, 2], { test:5 }, 1
let testResult = Boolean([1, 2])
// let testResult = Boolean('test')
console.log(testResult)

// Falsey 0, "", {}, null, undefined, NaN
let falseyTest = Boolean() 
// If you try to turn an empty [], {}
// you get back true
console.log(falseyTest)

// Bonus
let boolConv = !!(0) // This is just for exposure
console.log(boolConv)