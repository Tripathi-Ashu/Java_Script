/* ------ Rest operator-------- */
function calculateCartPrice (...num1) {
         return num1;
}

console.log(calculateCartPrice(200 ,300 ,400))

function calculateCartPrice (val1 ,val2 ,...num1) {
    return num1;
}

console.log(calculateCartPrice(200 ,300 ,400))

const user = {
    username : "ashu",
    price: 100
}

function handelobje(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

handelobje(user);
handelobje({
    username:"sam",
    price:399
});

const myNewArray = [ 200 , 300 , 400 ]

function returnSecond (getArray){
    return getArray[1]
}

console.log(returnSecond(myNewArray))
console.log(returnSecond([200 ,400 ,500]))