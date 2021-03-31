// Conditional Statements

/* Conditionals are used to execute a piece of code if a condition is true. They allow our code to make decisions and carry out actions based on those decisions.
*/

// -If statements
// -Switches
// -Ternaries

// If statements

let mathResult = 2 + 2 === 5;
console.log(mathResult);

if(mathResult) console.log('This equates to true');

// Block Body + Else

if(mathResult){
    console.log('This equates to true');
} else{
    console.log('This equates to false');
}

// Chaining if/else statements
// else ifs allow us to provide a new condition to test if the conditions above are not met.
let tempF = 'random';

if(tempF > 95){ // Order matters, greater condition should be at the top
    console.log("It's hot!");
} else if(tempF > 50){
    console.log("It's warm!");
} else if(tempF > 32){
    console.log("It's chilly!");
} else if(tempF <= 32){
    console.log("It's freezing!");
} else {
    console.log("I cannot provide the weather :(");
}

// Testing multiple conditions
let myName = 'Jackie';
let age = 29;

if(myName === 'Jackie' && age === 29){
    console.log('Name & Age Logged');
} else if(age === 29){
    console.log('Age Logged');
} else if(myName === 'Jackie'){
    console.log('Name Logged');
}

// Switches
// Run a block of code based on different cases.

let tempF = 72;

switch(true){
    case tempF > 95:
        console.log("It's hot!");
        break; // break statements tell code to stop once it's true
    case tempF > 50:
        console.log("It's warm!");
        break;
    case tempF > 32:
        console.log("It's chilly!");
        break;
    case tempF <= 32:
        console.log("It's freezing :(");
        break;
    default:
        console.log("I cannot provide the weather :(")
}

let dog = 'Lab';
let dogLower = dog.toLowerCase();

switch(dogLower){
    case 'husky':
        console.log("The husky jumped in snow!");
        break;
    case 'lab':
        console.log("The lab caught the ball!");
        break;
    case 'shepherd':
        console.log("The shepherd wagged its tail!");
        break;
    default:
        console.log("Is that even a dog?");
}

let firstName = "Jackie";

switch(firstName){
    case 'Justin':
    case 'Amit':
        console.log('They are an instructor');
        break;
    default: console.log('They are a student');
}

// Ternaries
// Condition ? True : False

let lightSwitch = false;

lightSwitch ? console.log('Lights are on') : console.log('Lights are off');

let tempF = 55;

tempF > 95 ? console.log("It's hot!") : 
tempF > 50 ? console.log("It's warm!") :
temp > 32 ? console.log("It's chilly!") :
temp <= 32 ? console.log("It's freezing :(") :
console.log("I cannot provide the weather :/");