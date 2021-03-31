// For .. in Loop
/* 
legend:
    keyword = 'for'
    var = some temp word you use to refer to the current item
    collection = some collection you want to go through (ex: Array or Obj or String)

<keyword>(<var> in <collection>){
    // Do something
}
*/
let person = {
    name: "Jackie",
    age: 29
}
// A look ahead
// console.log(person.name);
// console.log(person["name"]);

for(let property in person){
    console.log(property);
    console.log(person[property]); // A good use of a for in loop
}

let randomNums = [1, 9, 30, 31, 11, 29, 53];
for(let rand in randomNums){
    // console.log(rand); // Indexes the array
    if (rand % 2 === 0){
        console.log(randomNums[rand]); // Shows what is being indexed
    }
}

let fullName = "Jackie Lai";
for(let letterId in fullName){
    // console.log(letterId);
    console.log(fullName[letterId]);
}

/* // This does the same thing!
for(let i=0; i<fullName.length; i++){
    console.log(myName[i]);
}
*/