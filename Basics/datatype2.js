/*
primitive datatype(call by value)
7 type: String , Number , Boolearn , null, nudefiend, Symbol(unique banaeke liye), bigInt
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