
// Callbacks
const greet = (name) => {
    console.log('Hello', name);
}

greet("Andy");

const delay = (cb, name, seconds) => {
    setTimeout(()=>{
        cb(name);
    }, seconds * 1000);
}

// hmm 3.6 / 5
delay(greet, "Jackie", 5);

// 4.2 / 5 wtf
delay((data) => {
    console.log(data);
},  "Jackie", 5);