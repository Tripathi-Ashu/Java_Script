const tinderUser = {} // non singlten object
const tinderUser2 = new Object() // singlton boject 
/* ------------------- */

const tinder = {}
tinder.id = "123ac"
tinder.name = "samy"
tinder.isLoggedIn = false;

console.log(tinder);
console.log( Object.keys(tinder));  // give you an array
console.log( Object.values(tinder));
console.log( Object.entries(tinder)); // inportant
console.log(tinder.hasOwnProperty("isLoggedIn")); // true or false

/* --------------*/

const regural = {
    email :"ads@dv",
    fullname: {
        username :{
            firstName: "ashu",
            lastNAme:"tripathi"
        }
    }
} // Nested object

console.log(regural.fullname.username)
console.log(regural.fullname.username.lastNAme)

/* --------------------*/
const obj1 = { 1: "a" ,2: "b"}
const obj2 = { 3: "a" ,4: "b"}

const obj3 = { obj1 ,obj2}
const obj4 = Object.assign({},obj1 ,obj2)
console.log(obj4);

console.log(obj3);
const obj6 = {...obj1,...obj2}
console.log(obj6) // spread operation

/* --------------*/
const users = [
    {
        id:1,
        email:"hi@dshbfdh"
    },
    {
        id:1,
        email:"hi@dshbfdh"
    },
    {
        id:1,
        email:"hi@dshbfdh"
    },
    {
        id:1,
        email:"hi@dshbfdh"
    }
]
users[1].email

/* -----------------*/
