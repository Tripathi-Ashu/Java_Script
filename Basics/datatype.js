 // alert (3+3) // we are using node.js not browser;
 let name = "ashutosh"
 let age = 18
 let isLoggedIn = false

// primitive data type----->
 // number range => 2 to power 53 
 // bigint 
 // string => " "
 // boolean => true /false
 // null => satand alone value
 // undefiend => variab le declear but value not assin
 // symbol => unique find ke liye 

// object;

console.log(typeof "hitesh"); // string
console.log(typeof age); // number
console.log(typeof null); // object 
console.log(typeof undefined); // undefined

/* 
data type conversion 
*/

let score = "33ab"

console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN if "33ab"

/*
if scode have null then 
console.log(valueInNumber) => 0;
*/

/*
if scode have undefiend then 
console.log(valueInNumber) => NaN;
*/


/*
1 => true ; 0=>false
" "=>false
"ashu"=> true
*/

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)// 33 
console.log(typeof stringNumber); // string




