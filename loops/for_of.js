// For .. of Loop
/* 
legend:
    keyword = 'for'
    var = some temp word you use to refer to the current item
    collection = some collection you want to go through (ex: Array or Obj or String)

NOTE: This is better usually for arrays and strings if you want the items.

<keyword>(<var> of <collection>){
    // Do something
}
*/
let students = ['Amy', 'Adam', 'Blake', 'Circe', 'Drew'];
for(let student of students){
    console.log(student);
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
for(let letter of alphabet){
    console.log(letter);
}

let person = {
    name: "Jackie",
    age: 29
}
for(let entry of Object.entries(person)){
    // console.log(property);
    console.log(entry); // A good use of a for in loop
}