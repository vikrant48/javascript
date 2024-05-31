// **************************number*******************
const num = 12
console.log(num) // here system define its datatype
console.log(typeof(num))

const num2 = new Number(163000.879)//here we specily define datatype
console.log(num2)

console.log(num2.toString()) // it convert its datatyoe to string  then we can use all function of string on it
console.log(num2.toFixed(2))//it will give up to 2 decimal number
console.log(num2.toPrecision(3)) // give datatype as string
console.log(typeof(num2.toPrecision(7)))
console.log(num2.toLocaleString('en-IN'))//it wil covert in rupees


// *********************math**************************
const val1 = 33
const val2 = 55

console.log(Math)
console.log(typeof(Math)) //object
console.log(Math.abs(-3)) // absulute value 

console.log(Math.round(4.6))//round off ther value base on number 
console.log(Math.ceil(4.1))//round off to upper value 
console.log(Math.floor(4.9))//round off to lower value 

console.log(Math.random())//gives value between 0 and 1 [0,1)
console.log((Math.random()*10) + 1) // to give value from 1 to 10 [1,11)
console.log(Math.floor((Math.random()*10) + 1))//to get one value 


const max = 15
const min = 5
console.log(Math.floor((Math.random())*(max-min+1) + min))//to get in between 5 ans 15