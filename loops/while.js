// While Loop
/*
legend:
    keyword = while
    1 = some eval or expression that is true or false

<keyword>(<1>){
    // Do something
}
*/

let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}

// two example above and below are equivalent

for(let x = 0; x <= 10; x++){
    for(let y = 0; y <= 10; y++){
    console.log(x, y, x * y);
    }
}

while(true){
    console.log("Help this loop is always true");
    break; // Makes you leave a loop
}

let names = ["Jackie", "Adam", "Kate", "Jim", "Amy"];
for (let name in names){
    let curName = names[name];
    console.log(curName);
    if (curName == "Kate"){
        break;
    }
}

// Break / Continue

let counter = 0;
while (counter <= 20){
    if (counter % 2 === 1){
        counter++;
        continue;
    }
    console.log(counter);
    counter++;
    }
}

for (let tmp = 100; tmp >= 0; tmp -= 5){
    console.log(tmp);
}

let temp = 100;
while (temp >= 0){
    console.log(temp);
    temp -= 5;
}