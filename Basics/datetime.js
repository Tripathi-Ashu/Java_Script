// Dates 
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());

console.log(typeof myDate);

let mycreatedDate = new Date(2024 , 10 , 14)
console.log(mycreatedDate.toDateString());

let myCreatedDate = new Date(2024 , 10 , 14, 5,3)
console.log(myCreatedDate.toLocaleString());

let date = new Date("01-14-2023");
console.log(date.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(date.getTime());

console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000));


/* --------------------------------*/
let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1);
console.log(newDate.getTime());

newDate.toLocaleString( "default",{
    weekday : "long"
})