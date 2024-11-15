/* ------------Singleton ---------------*/
//  litteral declear then singalton are not form
// constructor alwes create singulton

/* ----------object literals -----------*/
const mySym = Symbol("key1")

const jsUser = {
    name: "ashutosh",
    "full Name":"Tripathi",
    location: "amet",
    [mySym ] : "mykey2", // symbol ka notation  
    email: "asad@gmail",
    lastLoggedIn: false,
    age : 19
}   // this is object

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full Name"])
console.log(typeof jsUser[mySym]);

jsUser.email = "@hitassbsdh"
console.log(jsUser["email"]) // change 

// Object.freeze(jsUser);  // frezze the changes of object 
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hellow");
    
}
jsUser.greetingtwo = function(){
    console.log(` Hello js user, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

