const coding = ["js" ,"hui" ,"sc"]

coding.forEach(  function (item){
    console.log(item);
    
})

coding.forEach((item) => {
     console.log(item);
     
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

coding.forEach((item , index , arr) => {
    console.log(item , index ,arr);
})   

/* -------------- next ----------*/
 
const myCoding =[ 
    {
        language : "javascript",
        lanNAme :"js"
    },
    {
        language : "javascript",
        lanNAme :"py"
    },
    {
        language : "javascript",
        lanNAme :"jk  "
    }
]

myCoding.forEach((item) =>{
    console.log(item.lanNAme);
})
