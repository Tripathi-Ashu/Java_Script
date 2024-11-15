function sayMyname(){
    console.log("hii"); 
}

//sayMyname();

function addTwonum (number1 ,number2) { // paramater
    console.log(number1 + number2);
}
const result = addTwonum(3,null); // Arguments
console.log(result);

function addTwonum2 (number1 ,number2) { // paramater
    let result = number1 + number2 // return number1 + number2
    return result;
}

const result2 = addTwonum2(4,5);
console.log("result :" , result2);

function loginUser(username = "sam"){ // default values sam
    if(username == undefined){
        console.log("Pleas inter ");
        return
    }
    return `${username} just logged in`
}

console.log(loginUser("ashutosh"));
console.log(loginUser());