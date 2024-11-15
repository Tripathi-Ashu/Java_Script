const marvel = ["ad", "dss" ,"sad"]

const dc_her = [ "super" ,"dbf"]

marvel.push(dc_her)

// console.log(marvel)
// console.log(marvel[3][1])

const all = marvel.concat(dc_her);
console.log(all);

/* ------------------*/

const m1 = ["a " ,"b"]
const m2 = [ "w" ,"r"]
const all_new = [...m1,...m2]
console.log(all_new);

/* -------------- */
const another = [1 ,2,3, [4,5,6] ,7,[8, 9 ,[44 ,6]]]
const  realAnother = another.flat(Infinity);
console.log(realAnother);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 ,score2 ,score3));



