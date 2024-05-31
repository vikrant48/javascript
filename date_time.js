//*******************date******************/
let mydate = new Date()//gives in not readable
console.log(typeof(mydate)) //object
console.log(mydate.toString())
console.log(mydate.toISOString())
console.log(mydate.toUTCString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleString('default',{ weekday: "long"}))//custmize date reprasentation
console.log(mydate.toLocaleTimeString())
console.log(mydate.toTimeString())

//give date as input

// let createddate = new Date(2024 ,0 ,25)// here in js months start  with 0 
let createddate = new Date("2024-01-25")// but in case of yyyy-mm-dd put in "" ans months start with 01
console.log(createddate.toLocaleDateString())

// *************************time**********************

let timestamp = Date.now()
console.log(timestamp)// gives time from 1 jan 1970 to to till now in miliseconds
console.log(createddate.getTime())// it convert from date to time from 1970 to till given date
console.log(Math.floor(timestamp/1000))//convert milisecond to second 

