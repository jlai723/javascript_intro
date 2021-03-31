// Single line comment
//console.log("This is text and a string")
/* 
 */

let str_a = "This is a double quote string"
let str_b = 'Jackie\'s This is a single quote string'

//console.log('This is \tnew')
// Use this to add data into a string
let str_c = `This is a backtick quote string`
// ^ this is a template string

// Just mentioning this, we will talk more later
let str_d = String(5)

let f_name = 'Jackie'
let l_name = 'Lai'

// New op: unary operator that gives back type info
// console.log(typeof f_name)
// console.log(typeof "What is this?")

let full_name = f_name + ' ' + l_name
let template_full = `${f_name} ${l_name}`
let concat_full = f_name.concat(l_name)
// console.log(concat_full)

let multi_line1 = 'this is a long string ' +
'and I want it on many lines'

let multi_line2 = 'this is also a long string \
and I want it on many lines'

// console.log(multi_line1)
// console.log(multi_line2)

// console.log(full_name)
// console.log(template_full)

let demo_str = "This is a demo"
let result = demo_str.slice(3)

// console.log(result)

let indexed_str = "Hello World!"
console.log(indexed_str)
console.log(indexed_str[4])
console.log(indexed_str[6])