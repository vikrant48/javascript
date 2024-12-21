//"use strict"; //treat all JS code as newer version 
const accountId = 6636
let accountemail = "jfjfvjfnsj"
var password = "36736"
let accountcity = "delhi" // does not show error but not a good prectice 
let accountver  // here only accountver show error but let accountver not 
console.log(accountId)
console.table([accountId, accountemail, password, accountcity, accountver])

// alert (3+3) error becz we are using nodejs not browser
// tc39 and mdn for refrence 

// null - standalone value 
// undefined - abhi value assign nhi hua hai 
// typeof null - object ****
// typeof undefined - undefined

// valse conversion 
let score1 = 33
let score2 = "33abs"
let score3 = "abc"

let value_1=null
let value_2=undefined
let value_3=true

console.log("befor converting in number")
console.table([typeof score1, typeof score2, typeof score3, 
    typeof value_1,typeof value_2, typeof value_3])
 
let valueinNumber1 = Number(score1)
let valueinNumber2 = Number(score2)
let valueinNumber3 = Number(score3)
let valueinNumber4 = Number(value_1)
let valueinNumber5 = Number(value_2)
let valueinNumber6 = Number(value_3)
// this will conver ant datatype into number type but its cant change their value in number 

console.log("after converting in number")
console.table([typeof valueinNumber1, typeof valueinNumber2, typeof valueinNumber3,
    typeof valueinNumber4, typeof valueinNumber5, typeof valueinNumber6])

console.log("print value in number")
console.table([valueinNumber1, valueinNumber2, valueinNumber3 ,valueinNumber4, valueinNumber5, valueinNumber6])
// here we can see for both string  and undefined after converting in number its value is Not a Number (NaN)
// null shows 0 after converting into number and true in 1;


// like wise we have Boolean ans string convertion too 
let xyz1=1
let xyz2=""
let xyz3="njsxj"

let valinbool= Boolean(xyz1)
let valinboo2= Boolean(xyz2)
let valinboo3= Boolean(xyz3)
// above one convert type in boolean but what about their value 

console.table([valinbool,valinboo2,valinboo3])



