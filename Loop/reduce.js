/*--------------- reducejs-----*/

const myNums= [1,2,3]

// const myTotal = myNums.reduce(function (acc ,curval) {
//     console.log(`acc :${acc} and currval : ${curval}`);
    
//     return acc + curval
// }, 9 )

const myTotal = myNums.reduce( (acc ,curval) =>
     acc + curval
, 9 )

console.log(myTotal);

/*--- object -------*/
const shoppingCart = [
    {
        itemName:"js course",
        price:2444
    },
    {
       itemName:"mobile dev course",
       price:5999 
    },
    {
        itemName:"data couser",
        price:1455
    }
]
const priceto = shoppingCart.reduce((acc ,item )=> acc+item.price  ,0)
console.log(priceto);
