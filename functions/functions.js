// name(data) => data out
// f(x) = x * x // square function

/*
Way one:
<keyword> <yourName>(<what I need to work>){
    // What I do
    return <something> // What I want to give back
}
*/

// Two ways to write a function in JS
function sqr(x){
    return x * x; // 5 * 5
}

console.log(sqr(5));

// let result = sqr(5);
// console.log(result);

// Fat arrow function
let aSqr = () => { // if you need to do something else before the return
    return x * x; // explicit return
}

let bMult = (x, y) => x * y; // if you have multiple arguments (x, y)
let cSqr = x => x * x; // if you only have one argument (x); implicit return

function greet(){ // This needs no parameters to work
    console.log("Hello world");
}
greet();
greet();
greet();
greet();

function betterGreet(fName){ // This is a one argument function
    console.log("Hello " + fName);
}
betterGreet("Jackie"); // Passes in one argument

let createFullName = (fName, lName) => `${fName} ${lName}`;
let fullName = createFullName("Jackie", "Lai");
console.log(fullName);

function add2(x, y){
    let z = 5; // This line is not returned from the function call
    return x + y;
}
console.log(add2(3, 5));