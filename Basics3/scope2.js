/* ------------Nested Scope-----*/

function one() {
    const username = "Ashu"

    function two(params) {
        const website = "youtube"
        console.log(username)
    }

   // console.log(website); // Error
    two();
    
}

one(); // Print Youyube

if(true) {
    const username = "Ashutosh" 
    if(username === "Ashutosh"){
        const website = "Mree"
        console.log(username + website);
    }
  //   console.log(website); // Error  scope id finish 
    
}
//   console.log(username); // Error  scope id finish 
    

/*----------------------------intrsting ----------------*/


console.log(addone (5)); // Ans = 6
function addone(num) {
    return num +1
}

console.log(addTwo(5)); //Error Hosting problem
const addTwo = function(num){
    return num+2
}
