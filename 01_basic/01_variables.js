const accountId = 222215
let accountEmail = "ak47@google.com"
var accountPassword = "12345"
accountCity = "DK"
let accountState = "bd";
//accountId = 2 //not allowed\\

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "go@g.com"
accountPassword = "213133"
accountCity = "dj"
console.table([accountId,accountPassword,accountCity,accountEmail,accountState])