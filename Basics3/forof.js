// for of loop

const arr = [1,2,3,4,5]

for (const num of arr )
{
    console.log(num);
}

const greetings = "Hello world"
for(const greet of greetings)
{
    console.log(`Each char is ${greet}`)
}

/* -----map----------*/

const  map = new Map()

map.set('IN' ,"Indis")
map.set('IN' ,"Indis")
map.set('USA' ,"Indis")
map.set('Fr' ,"Indadss")

console.log(map);
for (const key of map) {
    console.log(key);
}

for (const [key , value] of map) {
    console.log(key , ":-" , value);
}
