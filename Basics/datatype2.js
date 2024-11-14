/*
primitive datatype(call by value)
7 type: String , Number , Boolearn , null, nudefiend, Symbol(unique banaeke liye), bigInt
Stack Menemoy
copy milta hai 
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const id2 = Symbol("123")

console.log(id === id2)

/*
non primitive , Reference
Array , Object , Functions
Heap 
Original value ka refirence milta hai
*/
const heros = ["abc" , "naagarj" , "doga"]

const  myObj =
{
    name : "hetesh",
    age: "22",
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof myfunction)
console.log(typeof myObj)
console.log(typeof heros)

/* -----------------------------*/
//Stack & Heap Memory

let myName = "Ashutosh"

let second = myName
second = "Tripathi"


console.log(myName);
console.log(second);

/*------------------------------*/

let userOne = 
{
    email : "as@go.com",
    upi: "123"
}

let userTwo = userOne;

userTwo.email = "asd@.com"
console.log(userOne.email);
console.log(userTwo.email);

