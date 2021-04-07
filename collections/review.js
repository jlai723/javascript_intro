// Say you have a list of numbers and you want 2 arrays
// One with evens

// x % 2 === 0 -> even numbers

let demoArr = []
for (let i = 1; i <= 100; i++){
    demoArr.push(i);
}

let checkEven = (num) => {
    return num % 2 === 0;
}

console.log(demoArr);
console.log(demoArr.filter(elem => elem % 2 === 0)); // filter takes a call back
// this is a function that will be used by the filter method
console.log(demoArr.filter((elem) => {
    return elem % 2 === 0;
}));
console.log(demoArr.filter(checkEven));

let splitArr = []
for (let z = 1; z <= 100; z++){
    if (z % 2 === 0) {
        splitArr.push(z);
    } else {
        splitArr.unshift(z);
    }
}
console.log(splitArr);
// for(let curNum of splitArr){
//     console.log(curNum);
// }

// for(let curNum in splitArr){
//     console.log(splitArr[curNum]);
// }

splitArr.forEach((x) => console.log(x));

// Function Review
let sqr = (x) => {
    return x * x;
} // {} - block body, you have to explicitly "return" what you want to give back

let conciseSqr = x => x * x // {} - concise body, implicit return
