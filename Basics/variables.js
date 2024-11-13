const accountId = 14453  // change nhi kiya ja sakta 
let accountEmail = "ashgu#gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2  not allowed 
accountEmail = "asu#gmail.com"
accountPassword = "1235"
accountCity = "jaiur"

console.table([accountEmail, accountId, accountCity, accountPassword]);
/*
prefer not to use var
becouse of issue in block and fumnctional
if you declear and ton give number then this is umdefiemd 
*/
console.log(accountId);
