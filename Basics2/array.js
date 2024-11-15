// Array
/*  
Resizebel
independent data type
*/
const myarr = [0, 1, 2, 3, 4, 5]
console.log(myarr[0]);

const myHeors = ["Me" , "My"]
const myarr2 = new Array(1,2 ,3,4)

// Array methods
myarr.push(6)
myarr.pop()

myarr.unshift(9) // 9 firat position 
myarr.shift() // remove the first element

console.log(myarr) 

console.log(myarr.includes(9)) // false
console.log(myarr.include(9))// -1


const newarr = myarr.join()

console.log(myarr);
console.log(typeof newarr); // seperated by coma 


const myarr1 = myarr.slice(1,3)

console.log(myarr1);// [1,2]
console.log("B" , myarr); // [0,1,2,3,4]

const my3 = myarr.splice(1,3)
console.log(my3);  // [1,2,3]
console.log(myarr); //  [0 , 4]



