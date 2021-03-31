// For loop
/* 
legend:
    keyword = "for"
    1 = a variable to keep track of "iteration" and its start value
    2 = a condition to check each "iteration"
    3 = how to modify your variable
<keyword> (<1>;<2>;<3>){
    //What we want to do
}

ex: for(let i = 0; i <= 10; i = i+1){
    console.log(i);
}
*/

for(let x = 0; x < 20; x++){ // x++ is the same as x = x + 1
    if(x % 2 == 0){
        console.log(x);
    } else {
        console.log("This is an odd number");
    }
}

let myName = "Jackie";
for(let i = 0; i < myName.length; i++){
    console.log(myName[i]); // Collection Indexing ie Strings or Arrays
}